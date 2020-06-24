import React from "react";
import {Link} from "react-router-dom";
import logo from './Logo.svg'

export default function Logo() {
    return (
        <Link className={'logo'} to={'/'}>
            <img src={logo} alt={'logo'}/>
        </Link>
    )
}