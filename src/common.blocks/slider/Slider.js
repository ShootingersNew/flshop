import React, {useEffect} from "react";
import Slider from 'react-slick';
import fontBold from './../fonts/__proximaNovaBold/fonts__proximaNovaBold.module.css'
import button from './../button/button.module.css'
import './../slick/slick.css';

export default function Slides(props) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <Slider {...settings}>

            {props.slides.map((item, idx) => {
                {/* просто slick меняет аттрибут стайл у slider__item,поэтому добавили слайдер__бэкграунд*/
                }
                return (
                    <div key={idx} className={"slider__item"}>
                        <div className="slider__container container">
                            <div className="slider__inner">
                                <div className={"slider__header " + fontBold.fonts__proximaNovaBold}>
                                    {item.header}
                                </div>
                                <a className={'slider__link ' + button.button}>Заказать</a>
                            </div>
                            <div className="slider__background"
                                 style={{backgroundImage: 'url(' + item.back + ')'}}></div>

                        </div>
                    </div>
                )
            })}
        </Slider>

    )
}