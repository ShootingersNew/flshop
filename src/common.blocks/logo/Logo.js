import React from "react";
import {Link} from "react-router-dom";
import logo from './Logo.svg'

export default function Logo() {
    return (
        <Link to={'/'}>
            <object data={logo} type="image/svg+xml">

            </object>
        </Link>
    )
}