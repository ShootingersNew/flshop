//libs
import React, {useEffect, useRef, useState} from "react"
import Slider from 'react-slick'
import PropTypes from 'prop-types'
//styles
import './slickSlider.css'

Slider.propTypes = {
    logos: PropTypes.any,
};
export default function LogoSlider(
    {
        children,
    }
) {
    const params = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        lazyLoad: "ondemand",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        beforeChange(oldIndex, newIndex) {
            setSlideProgress(0);
            setActiveSlider(newIndex);
        },
    };
    const [activeSlider, setActiveSlider] = useState(0);
    const [slideProgress, setSlideProgress] = useState(0);


    const slider1 = useRef(null);

    useEffect(() => {
        let timer;
        const progressChangeSlides = () => {
            const time = params.autoplaySpeed / 100;
            timer = setTimeout(() => {
                let count = slideProgress + 1;
                if (count <= 100) {
                    setSlideProgress(count);
                } else {
                    slider1.current.slickGoTo(activeSlider + 1)
                }
            }, time);
        };
        progressChangeSlides();
        return () => clearTimeout(timer);
    }, [slideProgress, activeSlider, params.autoplaySpeed]);

    return (

        <div className="partners">
            <Slider ref={slider1} {...params}>
                {children}
            </Slider>
            <div className="partners__dots">
                {[1, 2, 3, 4, 5].map((item, idx) => {
                    let cn = 'slider__dot';
                    if (idx === activeSlider) {
                        cn = cn + ' slider__dot_active'
                    }
                    return (
                        <div
                            key={idx}
                            data-slick={idx}
                            className={cn}
                        >
                            {
                                idx === activeSlider &&
                                <div style={{width: `${slideProgress}%`}}/>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
