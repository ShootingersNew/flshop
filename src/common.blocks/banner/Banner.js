//libs
import React from "react"
import PropTypes from 'prop-types'
//styles
import './../container/container.css'
import banner from './banner.module.css'

Banner.propTypes = {
    bg: PropTypes.string.isRequired,
    render: PropTypes.element.isRequired
};

export default function Banner(props) {
    return (
        <article className={banner.banner} style={{backgroundImage: 'url(' + props.bg + ')'}}>
            <div className={'container ' + banner.banner__container}>
                <div className={banner.banner__inner}>
                    {props.render}
                </div>
            </div>
        </article>
    )
}