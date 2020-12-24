//libs
import React from "react"
import PropTypes from 'prop-types'
//comps
import Container from "../container/Container"
import FooterNavigation from "../footerNavigation/footerNavigation";
//styles
import './footer.css'
import paypal from './img/paypal.svg'
import yandex from './img/yandex.svg'
import webmoney from './img/webmoney.svg'
import visa from './img/visa.svg'

Footer.propTypes = {
    navs: PropTypes.array.isRequired
};
export default function Footer(props) {
    return (
        <footer className={'footer'} id={'footer'}>
            <Container className={'footer__container'}>
                <nav className="footer__nav">
                    {
                        props.navs.map((nav, id) => {
                            return (
                                <FooterNavigation
                                    key={id}
                                    className={'footer__navWrapper'}
                                    nav={nav}
                                />

                            )
                        })
                    }
                </nav>
                <div className="footer__other">
                    <div className="footer__paymentLogos">
                        <div className="footer__paymentLogo footer__paymentLogo_paypal"
                             style={{backgroundImage: 'url(' + paypal + ')'}}/>
                        <div className="footer__paymentLogo footer__paymentLogo_webmoney"
                             style={{backgroundImage: 'url(' + webmoney + ')'}}/>
                        <div className="footer__paymentLogo footer__paymentLogo_yandex"
                             style={{backgroundImage: 'url(' + yandex + ')'}}/>
                        <div className="footer__paymentLogo footer__paymentLogo_visa"
                             style={{backgroundImage: 'url(' + visa + ')'}}/>
                    </div>
                    <div className="footer__socials">
                        <a href="http://twitter.com" className="footer__socialLink">
                            <span className="footer__socialLogo icon-svg__twitter"/>
                        </a>
                        <a href="http://vk.com" className="footer__socialLink">
                            <span className="footer__socialLogo icon-svg__vk"/>
                        </a>
                        <a href="http://viber.com" className="footer__socialLink">
                            <span className="footer__socialLogo icon-svg__viber"/>
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
