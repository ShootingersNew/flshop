import React from "react";
import Header from "./common.blocks/header/Header";
import Footer from "./common.blocks/footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Main} from "./pages/main/Main";
import App from "./App";

export default function Routes() {
    return (
        <Router>
            <App>
                {/*хедер и футер здесь для того, чтобы не рендерить их на определенных страницах при необходимости*/}
                <Route component={Header}/>
                <Route exact path={"/"}>
                    <Main>

                    </Main>
                </Route>
                <Route>
                    <Footer navs={[
                        {
                            id: 1, li:
                                [{id: 1, name: 'Корпоративным клиентам', url: '#'}, {
                                    id: 2,
                                    name: 'Конфеденциальность',
                                    url: '#'
                                }, {id: 3, name: 'Публичная оферта', url: '#'}, {
                                    id: 4,
                                    name: 'Услуги и сервисы',
                                    url: '#'
                                }, {id: 5, name: 'Помощь', url: '#'}]
                        }
                        , {
                            id: 2, li:
                                [{id: 2, name: 'О магазине', url: '#'}, {id: 2, name: 'Франшиза', url: '#'}, {
                                    id: 3,
                                    name: 'Доставка',
                                    url: '#'
                                }, {id: 4, name: 'Гарантии', url: '#'}, {id: 5, name: 'Оплата', url: '#'}]
                        }
                        , {
                            id: 1, li:
                                [{id: 3, name: 'Карта сайта', url: '#'}, {id: 2, name: 'Оптовикам', url: '#'}, {
                                    id: 3,
                                    name: 'Мы на ТВ',
                                    url: '#'
                                }, {id: 4, name: 'Карьера', url: '#'}, {id: 5, name: 'Блог', url: '#'}]
                        }]}/>
                </Route>
            </App>
        </Router>
    )

}