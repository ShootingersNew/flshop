import React from "react";
import './../container/container.css'
import banner from './banner.module.css'
import button from './../button/button.module.css';
import '../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'

export default function Banner(props) {
    return (
        <article className={banner.banner} style={{backgroundImage: 'url(' + props.bg + ')'}}>
            <div className={'container ' + banner.banner__container}>
                <div className="banner__inner">
                    <header className={banner.banner__header + ' fonts__proximaNovaBold'}>
                        {props.header}
                    </header>
                    {/*todo переделать на Link*/}
                    <a className={'banner__link ' + button.button} href={props.linkUrl}>Заказать</a>
                </div>
            </div>
        </article>
    )
}