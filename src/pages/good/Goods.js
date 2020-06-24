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

class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            isLoaded: false,
            additional: null
        }
    }

    componentDidMount() {
        //делаем задержку, для имитации асинхронности
        this.loadImit();

        //    здесь бы делался запрос к серверу
        const {idx} = this.props.match.params;

        const itemsArr = require('../../config/json/allItems');
        //данные просматриваемого товара
        const curItem = itemsArr.find(item => item.id == idx);

        //массив текущих дополнительных товаров. Из-за отсутствия сервера приходится
        //перебирать все дополнительные товары на предмет наличия у них айдишников
        //указанных в данных об итеме
        const additionals = require('../../config/json/additionalItems');

        const curAdditionals = curItem.additional.reduce((sum, cur) => {
            let currentItem = '';
            additionals.forEach((item) => {
                if (item.id == cur) {
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

    loadImit() {
        //лоад имит существует для имитации загрузки
        let timer = setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 500);
    }

    render() {

        return (

            <React.Fragment>
                {
                    this.state.isLoaded && this.state.item ?
                        <Container>
                            <Main>
                                <Breadcrumbs
                                    items={
                                        [
                                            {title: 'Главная', path: '/'},
                                            {title: 'Каталог', path: '/catalog'},
                                            {title: [this.state.item.name]},
                                        ]
                                    }
                                />
                                <Flower item={this.state.item}/>
                                <AdditionalItems addItems={this.state.additional}/>
                            </Main>
                        </Container>
                        : <Preloader className={'preloader_fullpage'}/>
                }
            </React.Fragment>
        )
    }
}

export default Goods
