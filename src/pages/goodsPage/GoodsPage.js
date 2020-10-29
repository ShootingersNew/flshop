//libs
import React from "react"
//comps
import Preloader from "../../components/preloader/Preloader"
import Flower from "../../components/flower/Flower"
import Main from "../../components/main/Main"
import Showcase from "../../components/showcase/Showcase"
//styles
import '../../components/container/container.css'
import {loadImit} from "../../config/utils"
import {Route, Switch} from "react-router-dom"
import Composition from "../../components/composition/Composition"
import MobileDescription from "../../components/mobileDescription/MobileDescription.js";
import MobileButtons from "../../components/mobileButtons/MobileButtons";
import withCartConnect from "../../hoc/withCartConnect";

class GoodsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            loadingStatus: 'notLoaded',
            additional: null
        }
    }

    loadingHandler = (status) => {
        this.setState({loadingStatus: status})
    };
    getItem = () => {
        //делаем задержку, для имитации асинхронности
        loadImit(this.loadingHandler);

        //    здесь бы делался запрос к серверу
        const {idx, type} = this.props.match.params;
        const itemsArr = require('../../config/json/allItems')[type];
        //данные просматриваемого товара
        const curItem = itemsArr.find(item => item.id === Number.parseInt(idx));
        // additional items are shown only for flower items
        if (type !== 'additionalItems') {
            //массив текущих дополнительных товаров. Из-за отсутствия сервера приходится
            //перебирать все дополнительные товары на предмет наличия у них айдишников
            //указанных в данных об итеме
            const additionals = require('../../config/json/additionalItems');
            const curAdditionals = curItem.additional.reduce((sum, cur) => {
                let currentItem = '';
                additionals.forEach((item) => {
                    if (item.id === cur) {
                        currentItem = item
                    }
                });
                return [...sum, currentItem]
            }, []);
            this.setState({additional: curAdditionals});
        }
        this.setState({
            //отправляем в стейт "полученные данные" с "сервера"
            item: curItem,
        });
    };

    componentDidMount() {
        this.getItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params !== this.props.match.params) {
            this.getItem()
        }
    }


    render() {
        const {item, loadingStatus, additional} = this.state;
        const {type} = this.props.match.params;
        let photoArr = [{}, {}, {}];
        const path = this.props.match.url;
        return (

            <React.Fragment>
                <Switch>
                    <Route exact path={path}>
                        {
                            loadingStatus === 'loaded' && item ?
                                <Main
                                    className={'main_flower'}
                                    container={true}
                                    content={
                                        <>
                                            <Flower addInCart={this.props.addInCart} type={type} item={item}
                                                    path={path}/>
                                            <Showcase
                                                className={'photoReviews'}
                                                listingLink={false}
                                                counter={8}
                                                header={'Фотоотзывы'}
                                                showcaseType={'photoReview'}
                                                goods={photoArr}
                                                mobileContainer
                                            />
                                            {
                                                type !== 'additionalItems'
                                                &&
                                                <Showcase
                                                    header={'С этим товаром также приобретают'}
                                                    listingLink={false}
                                                    showcaseType={'additional'}
                                                    goods={additional}
                                                    mobileContainer
                                                />
                                            }

                                        </>
                                    }
                                    mobileButton={
                                        () => (
                                            <MobileButtons
                                                bot={[
                                                    {
                                                        name: 'В корзину',
                                                        fun: () => {
                                                            this.props.addInCart(item.id)
                                                        },
                                                    },
                                                    {
                                                        name: 'Купить в один клик',
                                                        fun: () => {
                                                            return false
                                                        },
                                                        type: 'oneClick',
                                                        btnMod: 'transparent'
                                                    }
                                                ]}
                                            />
                                        )
                                    }
                                >
                                </Main>
                                :
                                <Preloader className={'preloader_fullpage'}/>
                        }
                    </Route>

                    <Route path={`${path}/composition`}>
                        <Main className={'main_composition'}>
                            {item && <Composition composition={item.composition}/>}
                        </Main>
                    </Route>

                    <Route path={`${path}/reviews`}>
                        <Main className={'main_reviews'}>
                            <Showcase
                                listingLink={false}
                                counter={8}
                                header={'Фотоотзывы'}
                                showcaseType={'photoReview'}
                                goods={photoArr}
                                isMobile={true}
                            />
                        </Main>
                    </Route>

                    <Route path={`${path}/desc`}>
                        <Main className={'main_reviews'}>
                            {
                                item && <MobileDescription
                                    src={item.mobileRetouch}
                                    desc={'Букет станет отличным подарком для девушки на любой праздник. Известная композиция Ларии Лучевой подарит приятные эмоции \n' +
                                    'и тонкий цветочный аромат белых роз и статицы'}
                                    title={item.name}
                                />
                            }
                        </Main>
                    </Route>

                </Switch>
            </React.Fragment>
        )
    }
}

export default withCartConnect(GoodsPage)
