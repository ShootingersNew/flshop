//libs
import React from "react";
//comps
import Preloader from "../../components/preloader/Preloader";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Flower from "../../components/flower/Flower";
import AdditionalItems from "../../components/additionalItems/AdditionalItems";
import Main from "../../components/main/Main";
//styles
import '../../components/container/container.css'
import {loadImit} from "../../config/utils";

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

    componentDidMount() {
        //делаем задержку, для имитации асинхронности
        loadImit(this.loadingHandler);

        //    здесь бы делался запрос к серверу
        const {idx, type} = this.props.match.params;
        const itemsArr = require('../../config/json/' + type);
        //данные просматриваемого товара
        const curItem = itemsArr.find(item => item.id === Number.parseInt(idx));


        //
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
    }


    render() {
        const {item, loadingStatus, additional} = this.state;
        const {type} = this.props.match.params;
        return (

            <React.Fragment>

                {
                    loadingStatus === 'loaded' && item ?
                        <Main container={true}>
                            <Breadcrumbs
                                items={
                                    [
                                        {title: 'Главная', path: '/'},
                                        {title: 'Каталог', path: '/catalog'},
                                        {title: [item.name]},
                                    ]
                                }
                            />
                            <Flower type={type} item={item}/>
                            {
                                type !== 'additionalItems'
                                &&
                                <AdditionalItems addItems={additional}/>
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
