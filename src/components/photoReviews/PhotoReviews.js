import React from "react"
import './style.css'
import fullRhombus from './img/mark.svg'
import emptyRedRhombus from '../flower/img/Star.svg'
import emptyBlackRhombus from './img/blackRhombus.svg'
import Container from "../container/Container"

const PhotoReview = () => {
    const renderMark = (num) => {
        const markIcon = (src) => <img className={'photoReview__markIcon'} src={src} alt="mark"/>;
        let mark = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(num)) {
                mark.push(markIcon(fullRhombus))
            } else {
                mark.push(markIcon(emptyBlackRhombus))
            }
        }
        return mark
    };
    return (
        <article className={'photoReview'}>
            <div className="photoReview__imageWrapper">
                <div style={{backgroundImage: `url('/images/reviews/image.png')`}} className="photoReview__image"/>
            </div>
            <Container className={'container_mobile photoReview__contentContainer'}>
                <a href="#" className="photoReview__link">
                    <div className="photoReview__linkText">@anatol</div>
                </a>
                <header className="photoReview__header">
                <span className="photoReview__mark">

                    {
                        renderMark(4.1)
                    }
                </span>
                    <span className="photoReview__mark photoReview__mark_mobile">
                        <img className={"photoReview__markIcon"} src={emptyRedRhombus} alt="markicon"/>
                        4.1
                    </span>
                    <span className="photoReview__name photoReview__name_mobile fonts__proximaNovaBold">Анатолий</span>
                    <span className="photoReview__date">
                    15 сентября 2020
                </span>
                    <span className="photoReview__name fonts__proximaNovaBold">Анатолий</span>
                </header>
                <main className="photoReview__main">
                    Подарил жене на день рождения, букет который
                    я ей дарил на наше первое свидание букет с хорошими воспоминаниями. Цена со скидкой копейки
                </main>
            </Container>
        </article>
    )
};
export default PhotoReview
