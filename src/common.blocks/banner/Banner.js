//libs
import React from "react"
import PropTypes from 'prop-types'
//comps
import Button from "../button/Button"
//styles
import './../container/container.css'
import banner from './banner.module.css'
import '../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'

Banner.propTypes = {
    bg: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

export default function Banner(props) {
    return (
        <article className={banner.banner} style={{backgroundImage: 'url(' + props.bg + ')'}}>
            <div className={'container ' + banner.banner__container}>
                <div className="banner__inner">
                    <header className={banner.banner__header + ' fonts__proximaNovaBold'}>
                        {props.header}
                    </header>
                    <Button link={props.linkUrl} className={'banner__link'}>Заказать</Button>
                </div>
            </div>
        </article>
    )
}