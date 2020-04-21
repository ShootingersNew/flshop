import React, {useEffect, Fragment, useRef} from "react";
import Slider from 'react-slick';
import fontBold from './../fonts/__proximaNovaBold/fonts__proximaNovaBold.module.css'
import button from './../button/button.module.css'
import './../slick/slick.css';

export default function Slides(props) {
    const slider = useRef(null);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    function goTo(e) {
        const idx = e.target.getAttribute('data-slick');
        slider.current.slickGoTo(idx);
    }

    return (
        <React.Fragment>
            <Slider ref={slider} {...settings}>

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
            {/*делаю кастом дотс, чтобы не колдовать с базовым методом slick*/}
            <div className="slider__dots">
                {props.dots.map((item, idx) => {
                    return (
                        <div data-slick={idx} className={'slider__dot'} onClick={(e) => {
                            goTo(e)
                        }} style={{backgroundImage: 'url(' + item + ')'}}></div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}