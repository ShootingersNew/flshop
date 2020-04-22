import React from "react";
import Bouquet from "../bouquet/Bouquet";
import {Link} from "react-router-dom";
import './../link/link.css'
import './showcase.css'

export default function Showcase(props) {

    return (
        <div className="showcase">
            <div className="container">
                <div className="showcase__header">
                    Женственные подарки к 8 марта
                    <Link className={'showcase__link link'} to={'/'}>Смотреть все товары</Link>
                </div>
                <div className="showcase__items">
                    {
                        props.items.map((item) => {
                            return <Bouquet item={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}