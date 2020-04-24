import React from "react";
import Bouquet from "../bouquet/Bouquet";
import withBDConnect from "../../hoc/withBDConnect/withBDConnect";
import {Link} from "react-router-dom";
import './../link/link.css'
import './showcase.css'

function Showcase(props) {

    return (
        <div className="showcase">
            <div className="container">
                <div className="showcase__header">
                    Женственные подарки к 8 марта
                    <Link className={'showcase__link link'} to={'/'}>Смотреть все товары</Link>
                </div>
                <div className="showcase__items">
                    {/*если в этот компонент hoc'ом был передан объект с итемами, то рендерим*/}
                    {props.goods ?
                        props.goods.map((item) => {
                            return <Bouquet item={item}/>
                        })
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default withBDConnect(Showcase)