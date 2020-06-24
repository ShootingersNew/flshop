//libs
import React, {useRef} from "react"
import Slider from 'react-slick'
import PropTypes from 'prop-types'
//comps
import Button from "../button/Button"
//styles
import '../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import './../slick/slick.css'

Slides.propTypes = {
    slides: PropTypes.shape({
        item: PropTypes.string.isRequired,
        back: PropTypes.string.isRequired
    }),
    dots: PropTypes.array.isRequired
};
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
                    return (
                        <div key={idx} className={"slider__item"}>
                            <div className="slider__container container">
                                <div className="slider__inner">
                                    <div className={"slider__header fonts__proximaNovaBold "}>
                                        {item.header}
                                    </div>
                                    <Button link={'#'} className={'slider__link'}>Заказать</Button>
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
                {props.dots.map((item, idx) => {
                    return (
                        <div
                            data-slick={idx}
                            className={'slider__dot'}
                            onClick={(e) => {
                                goTo(e)
                            }}
                            style={{backgroundImage: 'url(' + item + ')'}}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}