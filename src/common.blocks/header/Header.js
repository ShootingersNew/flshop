import React from "react";
import Logo from "../logo/Logo";

export default function Header() {
    return (
        <header>
            <Logo/>
            <button className="catalog__button">
                Каталог
            </button>
            <div className="header__telephoneContact">
                <a href="tel:+79673110351">8 967 311 03 51</a>
                c 8 до 20 ежедневно
            </div>
        </header>
    )
}