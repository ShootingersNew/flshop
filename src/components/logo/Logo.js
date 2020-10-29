import React from "react"
import {Link, withRouter, useRouteMatch} from "react-router-dom"
// styles
import logo from './Logo.svg'
import './logo.css'
import back from './Back.svg'
import {useIsMobile} from "../../config/utils";

function Logo({history}) {
    const isMobile = useIsMobile();
    const isExact = useRouteMatch().isExact;
    return (
        <div className="logo__wrapper">
            {
                isMobile && !!!isExact ?
                    <button className={'logo__backButton'} onClick={() => history.goBack()}>
                        <img className={'logo__backButtonImg'} src={back} alt="Назад"/>
                    </button>
                    :
                    <Link className={'logo'} to={'/'}>
                        <img src={logo} alt={'logo'}/>
                        <span className="logo__text fonts__proximaNovaBlack">FlowerBox</span>
                    </Link>
            }
        </div>

    )
}

export default withRouter(Logo)

