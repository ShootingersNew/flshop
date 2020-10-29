import React from "react"
import {Link} from "react-router-dom"
import Container from "../container/Container"
//styles
import './mobileFooterNav.css'
import call from './img/Call.svg'

const MobileFooterNav = () => {
    return (
        <div className={'mobileFooterNav'}>
            <Container>
                <ul className="mobileFooterNav__list">
                    <li className="mobileFooterNav__listItem">
                        <Link to={'/catalog'} className="mobileFooterNav__link mobileFooterNav_active">
                            Каталог
                        </Link>
                    </li>
                    <li className="mobileFooterNav__listItem">
                        <Link to={'/search'} className="mobileFooterNav__link mobileFooterNav_active">
                            Каталог
                        </Link>
                    </li>
                    <li className="mobileFooterNav__listItem">
                        <Link to={false} className="mobileFooterNav__link mobileFooterNav_active">
                            Вход
                        </Link>
                    </li>
                    <li className="mobileFooterNav__listItem mobileFooterNav_icon">
                        <Link to={'/callback'} className="mobileFooterNav__link mobileFooterNav_active">
                            <img src={call} alt="" className=""/>
                        </Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
};
export default MobileFooterNav;
