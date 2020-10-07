//libs
import React, {useRef, useState} from "react"
import Slider from 'react-slick'
import PropTypes, {oneOf} from 'prop-types'
//comps
import Button from "../button/Button"
//styles
import './slickSlider.css'

Slider.propTypes = {
    slides: PropTypes.shape({
        item: PropTypes.string.isRequired,
        back: PropTypes.string.isRequired
    }),
    params: PropTypes.shape({
        dots: PropTypes.bool,
        arrows: PropTypes.bool,
        infinite: PropTypes.bool,
        speed: PropTypes.number,
        lazyLoad: oneOf(['ondemand', 'progressive']),
        slidesToShow: PropTypes.number,
        sliderToScroll: PropTypes.number
    })
};
export default function SlickSlider(
    {
        slides,
        params = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            lazyLoad: "ondemand",
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
) {
    const [activeSlider, setActiveSlider] = useState(0);
    const slider = useRef(null);

    function goTo(e) {
        const idx = Number(e.target.getAttribute('data-slick'));
        slider.current.slickGoTo(idx);
        setActiveSlider(idx)
    }

    return (
        <React.Fragment>
            <Slider ref={slider} {...params}>

                {slides.map((item, idx) => {
                    return (
                        <div key={idx} className={"slider__item"}>
                            <div className="slider__container container">
                                <div className="slider__inner">
                                    <div className={"slider__header fonts__proximaNovaBlack "}>
                                        {item.header}
                                    </div>
                                    <Button link={'#'} className={'slider__link'}>Заказать букет</Button>
                                </div>
                                <div className="slider__background"
                                     style={{backgroundImage: 'url(' + item.back + ')'}}/>

                            </div>
                        </div>
                    )
                })}
            </Slider>
            {/*делаю кастом дотс, чтобы не колдовать с базовым методом slick*/}
            <div className="slider__dots">
                {slides.map((item, idx) => {
                    let cn = 'slider__dot';
                    if (idx === activeSlider) {
                        cn = cn + ' slider__dot_active'
                    }
                    return (
                        <div
                            key={idx}
                            data-slick={idx}
                            className={cn}
                            onClick={(e) => {
                                goTo(e)
                            }}
                            style={{backgroundImage: 'url(' + item.back + ')'}}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}
