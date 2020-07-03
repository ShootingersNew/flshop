//libs
import React, {useRef} from "react"
import Slider from 'react-slick'
import PropTypes from 'prop-types'
//comps
import Button from "../button/Button"
//styles
import './slickSlider.css'

Slider.propTypes = {
    slides: PropTypes.shape({
        item: PropTypes.string.isRequired,
        back: PropTypes.string.isRequired
    }),
};
export default function SlickSlider(props) {
    const slider = useRef(null);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        lazyLoad: "ondemand",
        onLazyLoad: slidesLoaded => {
            console.log('eee')
        },
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
                {props.slides.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            data-slick={idx}
                            className={'slider__dot'}
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