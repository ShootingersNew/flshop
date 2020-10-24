//libs
import React from "react"
//comps
import Header from "../header/Header"
import Footer from "../footer/Footer"
//styles
import './../fonts/__proximaNova/_regular/fonts__proximaNova_regular.css'
import './page.css'
import arr from '../../config/json/menu.json'
import {withRouter} from 'react-router-dom';
import {useIsMobile} from "../../config/utils";

const Page = (props) => {
    const isMobile = useIsMobile();
    console.log(props);
    return (
        <div className={'page fonts__proximaNovaRegular'}>
            <Header/>
            {props.children}
            {console.log(props.match.isExact || !!isMobile)}
            {
                (props.match.isExact || !!!isMobile) &&
                <Footer
                    navs={arr.footer}
                />
            }
        </div>
    )
};
export default withRouter(Page)
