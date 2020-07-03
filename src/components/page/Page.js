//libs
import React from "react"
//comps
import Header from "../header/Header"
import Footer from "../footer/Footer"
//styles
import './page.css'

export default function Page(props) {
    return (
        <div className={'page fonts__proximaNovaRegular'}>
            <Header/>
            {props.children}
            <Footer navs={[
                {
                    id: 1, li: [
                        {
                            id: 1,
                            name: 'Корпоративным клиентам',
                            url: '#'
                        },
                        {
                            id: 2,
                            name: 'Конфеденциальность',
                            url: '#'
                        },
                        {
                            id: 3, name: 'Публичная оферта', url: '#'
                        },
                        {
                            id: 4,
                            name: 'Услуги и сервисы',
                            url: '#'
                        },
                        {
                            id: 5, name: 'Помощь',
                            url: '#'
                        }
                    ]
                },
                {
                    id: 2, li:
                        [
                            {
                                id: 1, name: 'О магазине',
                                url: '#'
                            },
                            {
                                id: 2,
                                name: 'Франшиза',
                                url: '#'
                            },
                            {
                                id: 3,
                                name: 'Доставка',
                                url: '#'
                            },
                            {
                                id: 4,
                                name: 'Гарантии',
                                url: '#'
                            },
                            {
                                id: 5,
                                name: 'Оплата',
                                url: '#'
                            }
                        ]
                },
                {
                    id: 3, li:
                        [
                            {
                                id: 1,
                                name: 'Карта сайта',
                                url: '#'
                            },
                            {
                                id: 2,
                                name: 'Оптовикам',
                                url: '#'
                            },
                            {
                                id: 3,
                                name: 'Мы на ТВ',
                                url: '#'
                            },
                            {
                                id: 4,
                                name: 'Карьера',
                                url: '#'
                            },
                            {
                                id: 5,
                                name: 'Блог',
                                url: '#'
                            }
                        ]
                }
            ]}/>
        </div>
    )
}