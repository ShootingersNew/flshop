import React from "react";
import Header from "../../common.blocks/header/Header";
import Slides from "../../common.blocks/slider/Slider";
import './../../common.blocks/page/page.css'
import font from './../../common.blocks/fonts/__proximaNovaRegular/fonts__proximaNovaRegular.module.css'
import './../../common.blocks/container/container.css'
import back1 from './../../common.blocks/slider/img/Ellipse12.png'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`page ${font.fonts__proximaNovaRegular}`}>
                <Header>

                </Header>


                <Slides slides={[
                    {
                        header: 'Новинка «Фруктовый десерт»',
                        back: back1
                    }, {
                        header: 'Новинка «Фруктовый десерт»',
                        back: back1
                    }, {
                        header: 'Новинка «Фруктовый десерт»',
                        back: back1
                    }, {
                        header: 'Новинка «Фруктовый десерт»',
                        back: back1
                    },]}>

                </Slides>
            </div>
        )
    }
}

export {Main};