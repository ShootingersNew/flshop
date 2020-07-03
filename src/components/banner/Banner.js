//libs
import React from "react"
import PropTypes from 'prop-types'
import {LazyImage} from "react-lazy-images";
//styles
import './../container/container.css'
import banner from './banner.module.css'
import Preloader from "../preloader/Preloader";

Banner.propTypes = {
    bg: PropTypes.string.isRequired,
    render: PropTypes.element.isRequired
};

export default function Banner(props) {
    return (
        <article className={banner.banner}>
            <LazyImage
                src={props.bg}
                placeholder={({imageProps, ref}) => (
                    <Preloader ref={ref} className={imageProps.className}/>
                )}
                actual={({imageProps}) =>
                    <React.Fragment>
                        <div className={banner.banner__bg} style={{backgroundImage: 'url(' + imageProps.src + ')'}}/>
                        <div className={'container ' + banner.banner__container}>
                            <div className={banner.banner__inner}>
                                {props.render}
                            </div>
                        </div>
                    </React.Fragment>
                }
            />
            }
        </article>
    )
}