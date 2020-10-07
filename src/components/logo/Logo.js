import React from "react"
import {Link} from "react-router-dom"
// styles
import logo from './Logo.svg'
import './logo.css'

export default function Logo() {
    return (
        <Link className={'logo'} to={'/'}>
            <img src={logo} alt={'logo'}/>
            <span className="logo__text fonts__proximaNovaBlack">FlowerBox</span>
        </Link>
    )
}
