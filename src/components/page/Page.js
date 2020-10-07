//libs
import React from "react"
//comps
import Header from "../header/Header"
import Footer from "../footer/Footer"
//styles
import './page.css'
import arr from '../../config/json/menu.json'

export default function Page(props) {
    return (
        <div className={'page fonts__proximaNovaRegular'}>
            <Header/>
            {props.children}
            <Footer
                navs={arr.footer}

            />
        </div>
    )
}
