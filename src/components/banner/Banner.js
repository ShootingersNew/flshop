//libs
import React from "react"
import PropTypes from 'prop-types'
import {LazyImage} from "react-lazy-images";
//styles
import './../container/container.css'
import banner from './banner.module.css'
import Preloader from "../preloader/Preloader";
import Button from "../button/Button";

Banner.propTypes = {
    bg: PropTypes.string.isRequired,
    header: PropTypes.element.isRequired,
    mobileHeader: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default function Banner({header, mobileHeader, buttonText, bg}) {
    return (
        <div className="banner__wrapper">
            <div className="container">
                <header className={banner.banner__mobileHeader + ' fonts__proximaNovaBold'}>
                    {mobileHeader}
                </header>
            </div>
            <section className={banner.banner}>
                <LazyImage
                    src={bg}
                    placeholder={({imageProps, ref}) => (
                        <Preloader ref={ref} className={imageProps.className}/>
                    )}
                    actual={({imageProps}) =>
                        <>
                            <div className={banner.banner__bg}
                                 style={{backgroundImage: 'url(' + imageProps.src + ')'}}/>
                            <div className={'container ' + banner.banner__container}>
                                <div className={banner.banner__inner}>
                                    <header className={banner.banner__header + ' fonts__proximaNovaBold'}>
                                        {header}
                                    </header>
                                    <Button className={'banner__link'}>{buttonText}</Button>
                                </div>
                            </div>
                        </>
                    }
                />
            </section>
        </div>
    )
}
