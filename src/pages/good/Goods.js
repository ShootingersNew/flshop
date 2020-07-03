//libs
import React from "react";
//comps
import Preloader from "../../common.blocks/preloader/Preloader";
import Breadcrumbs from "../../common.blocks/breadcrumbs/Breadcrumbs";
import Flower from "../../common.blocks/flower/Flower";
import AdditionalItems from "../../common.blocks/additionalItems/AdditionalItems";
import Container from "../../common.blocks/container/Container";
import Main from "../../common.blocks/main/Main";
//styles
import '../../common.blocks/container/container.css'
import {loadImit} from "../../config/utils";

class Goods extends React.Component {
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
        const {idx} = this.props.match.params;

        const itemsArr = require('../../config/json/allItems');
        //данные просматриваемого товара
        const curItem = itemsArr.find(item => item.id === Number.parseInt(idx));

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

        this.setState({
            //отправляем в стейт "полученные данные" с "сервера"
            item: curItem,
            additional: curAdditionals
        });
    }


    render() {
        const {item, loadingStatus, additional} = this.state;
        return (

            <React.Fragment>
                {
                    loadingStatus === 'loaded' && item ?

                        <Main container={true}>
                            <Container>
                                <Breadcrumbs
                                    items={
                                        [
                                            {title: 'Главная', path: '/'},
                                            {title: 'Каталог', path: '/catalog'},
                                            {title: [item.name]},
                                        ]
                                    }
                                />
                                <Flower item={item}/>
                                <AdditionalItems addItems={additional}/>
                            </Container>
                        </Main>
                        :
                        <Preloader className={'preloader_fullpage'}/>
                }
            </React.Fragment>
        )
    }
}

export default Goods
