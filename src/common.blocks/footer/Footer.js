import React from "react";
import {Link} from "react-router-dom";
import './footer.css'
import './../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import Container from "../container/Container";
import paypal from './img/paypal.svg'
import yandex from './img/yandex.svg'
import webmoney from './img/webmoney.svg'
import visa from './img/visa.svg'

export default function Footer(props) {
    return (
        <footer className={'footer'}>
            <Container classname={'footer__container'}>
                <nav className="footer__nav">
                    {
                        props.navs.map((nav) => {
                            return (
                                <ul className="footer__navList">
                                    {
                                        nav.li.map((li) => {
                                            return (
                                                <li key={li.id} className="footer__navLi">
                                                    <Link to={li.url}>{li.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </nav>
                <div className="footer__other">
                    <div className="footer__paymentLogos">
                        <div className="footer__paymentLogo footer__paymentLogo_paypal"
                             style={{backgroundImage: 'url(' + paypal + ')'}}></div>
                        <div className="footer__paymentLogo footer__paymentLogo_webmoney"
                             style={{backgroundImage: 'url(' + webmoney + ')'}}></div>
                        <div className="footer__paymentLogo footer__paymentLogo_yandex"
                             style={{backgroundImage: 'url(' + yandex + ')'}}></div>
                        <div className="footer__paymentLogo footer__paymentLogo_visa"
                             style={{backgroundImage: 'url(' + visa + ')'}}></div>
                    </div>
                    <div className="footer__socials">
                        <a href="#" className="footer__socialLink">
                            <span className="footer__socialLogo icon-svg__twitter"></span>
                        </a>
                        <a href="#" className="footer__socialLink">
                            <span className="footer__socialLogo icon-svg__vk"></span>
                        </a>
                        <a href="#" className="footer__socialLink">
                            <span className="footer__socialLogo icon-svg__viber"></span>
                        </a>

                    </div>
                    <div className="footer__copyrights">
                        © 2009-2020 Интернет магазин
                        цветов и подарков janosy.ru
                        Все права защищены
                    </div>
                </div>
                <div className="footer__contacts">
                    <a className={"footer__telephone fonts__proximaNovaBold"} href="tel: 89673110351">8 967 311 03
                        51</a>
                    <a className={'link footer__mail'} href="mailto:info@flowers.ru">info@flowers.ru</a>
                    <address className={'footer__address'}>
                        <span>ТЦ «Цветочный»</span><br/>
                        Г. Воронеж,<br/>
                        ул. Цветочная, д. 5
                    </address>
                </div>
            </Container>
        </footer>
    )
}