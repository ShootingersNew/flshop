//libs
import React from "react"
//comps
import Header from "../header/Header"
import Footer from "../footer/Footer"
//styles
import './../fonts/__proximaNova/_regular/fonts__proximaNova_regular.css'
import './page.css'
import arr from '../../config/json/menu.json'
import {withRouter} from 'react-router-dom'
import {useIsMobile} from "../../config/utils"
import MobileFooterNav from "../mobileFooterNav/MobileFooterNav";

const Page = (props) => {
    const isMobile = useIsMobile();
    return (
        <div className={'page fonts__proximaNovaRegular'}>
            <Header/>
            {props.children}
            {
                (props.match.isExact || !!!isMobile) &&
                <Footer
                    navs={arr.footer}
                />
            }
            {
                isMobile && <MobileFooterNav/>
            }
        </div>
    )
};
export default withRouter(Page)
