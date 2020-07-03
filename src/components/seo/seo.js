//libs
import React from "react";
import {Link} from "react-router-dom";
//styles
import './seo.css'
import bg1 from './img/1.png'
import bg2 from './img/3.png'
import bg3 from './img/2.png'
import bg4 from './img/4.png'

export default function Seo() {
    let seoArr = [
        {
            bg: bg1,
            header: 'От флористов',
            desc: 'Букеты напрямую от профессиональных флористов. Без агрегаторов и посредников. Благодаря сотрудничеству в магазине низкие цены',
            link: {
                href: '#',
                text: 'Узнать больше'
            }
        },
        {
            bg: bg3,
            header: 'Учитываем пожелания',
            desc: 'Соберем букет по желанию или изменим заказ. Позвоните и скажите, что вы хотите изменить в заказе или напишите пожелание к заказу',
            link: {
                href: '#',
                text: 'Узменить заказ'
            }
        },
        {
            bg: bg2,
            header: 'Доставка',
            desc: 'Доставим от 45 минут в любую точку Воронежа. Заказ всегда можно отследить в приложении, будьте внимательны с номером заказа',
            link: {
                href: '#',
                text: 'Курьерская служба'
            }
        },
        {
            bg: bg4,
            header: 'Оплата',
            desc: 'Для оплаты мы выбрали самые популярные сервисы: PayPal, Яндекс.Деньги, Visa, WebMoney, оплата наличными курьеру',
            link: {
                href: '#',
                text: 'Быстрый способ оплаты'
            }
        },
    ];
    return (
        <div className="seo">
            <div className="seo__container">
                {
                    seoArr.map((item, idx) => {
                        return (
                            <div key={idx} className={'seo__tile'}>
                                <div className="seo__bg" style={{backgroundImage: 'url(' + item.bg + ')'}}/>
                                <div className="seo__content">
                                    <h2 className="seo__header fonts__proximaNovaBold">{item.header}</h2>
                                    <div className="seo__desc">{item.desc}</div>
                                    <Link className={'seo__link link'} to={item.link.href}>{item.link.text}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
