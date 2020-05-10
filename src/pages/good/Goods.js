import React from "react";
import {connect} from "react-redux";
import Preloader from "../../common.blocks/preloader/Preloader";
import Breadcrumbs from "../../common.blocks/breadcrumbs/Breadcrumbs";
import Flower from "../../common.blocks/flower/Flower";
import AdditionalItems from "../../common.blocks/additionalItems/AdditionalItems";
import Container from "../../common.blocks/container/Container";
import './../../common.blocks/container/container.css'

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
        //пропсы вообще не рекомендуется отправлять стейт, но если был бы сервер, то
        //это были бы не пропсы

        //данные просматриваемого товара
        const curItem = this.props.item.find(item => item.id == idx);

        //массив текущих дополнительных товаров. Из-за отсутствия сервера приходится
        //перебирать все дополнительные товары на предмет наличия у них айдишников
        //указанных в данных об итеме
        const curAdditionals = this.props.allAdditionals.filter((additionalItem) => (
            curItem.additional.indexOf(additionalItem.id) !== -1
        ));
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
                            <Breadcrumbs/>
                            <Flower item={this.state.item}/>
                            <AdditionalItems addItems={this.state.additional}/>

                        </Container>
                        : <Preloader className={'preloader_fullpage'}/>
                }
            </React.Fragment>
        )
    }
}

// здесь подсоединяемся к стору для имитации работы сервера, если был бы REST API,
// то можно было бы и обойтись без стора
const mapStateToProps = (state, props) => {
    //определяем тип товара(букет или дополнительный) из строки адреса
    const {type} = props.match.params;
    return {
        //отправляем аж все товары данного типа в пропсы, что избыточно, но т.к сервера нет,
        //приходится вот так
        item: state.goods[type],
        allAdditionals: state.goods.additionalItems
    }
};

export default connect(mapStateToProps)(Goods)