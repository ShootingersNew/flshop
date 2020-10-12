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
        console.log(itemsArr);
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
        return (

            <React.Fragment>

                {
                    loadingStatus === 'loaded' && item ?
                        <Main container={true}>
                            <Flower type={type} item={item}/>
                            <Showcase
                                className={'photoReviews'}
                                listingLink={false}
                                counter={8}
                                header={'Фотоотзывы'}
                                showcaseType={'photoReview'}
                                goods={photoArr}
                            />
                            {
                                type !== 'additionalItems'
                                &&
                                <Showcase
                                    header={'С этим товаром также приобретают'}
                                    listingLink={false}
                                    showcaseType={'additional'}
                                    goods={additional}
                                />
                            }
                        </Main>
                        :
                        <Preloader className={'preloader_fullpage'}/>
                }
            </React.Fragment>
        )
    }
}

export default GoodsPage
