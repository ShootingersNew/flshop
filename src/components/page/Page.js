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

export default function Page(props) {
    return (
        <div className={'page fonts__proximaNovaRegular'}>
            {/*<button onClick={()=>props.history.goBack()}>НАЗАД</button>*/}
            <Header/>
            {props.children}
            <Footer
                navs={arr.footer}

            />
        </div>
    )
}
