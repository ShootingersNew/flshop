import React from "react"
import './style.css'
import svg from './img/mark.svg'

const PhotoReview = () => {
    const renderMark = (num) => {
        const markIcon = <img className={'photoReview__markIcon'} src={svg} alt="mark"/>;
        let mark = [];
        for (let i = 0; i < num; i++) {
            mark.push(markIcon)
        }
        return mark
    };
    return (
        <article className={'photoReview'}>
            <div className="photoReview__imageWrapper">
                <img src="/images/reviews/image.png" alt="" className="photoReview__image"/>
                <a href="#" className="photoReview__link">@Anatol</a>
                <header className="photoReview__header">
                <span className="photoReview__mark">

                    {
                        renderMark(4)
                    }
                </span>
                    <span className="photoReview__date">
                    15 сентября 2020
                </span>
                    <span className="photoReview__name fonts__proximaNovaBold">Анатолий</span>
                </header>
                <main className="photoReview__main">
                    Подарил жене на день рождения, букет который
                    я ей дарил на наше первое свидание букет с хорошими воспоминаниями. Цена со скидкой копейки
                </main>
            </div>
        </article>
    )
};
export default PhotoReview
