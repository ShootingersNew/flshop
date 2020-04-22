import React from "react";
import Header from "../../common.blocks/header/Header";
import Slides from "../../common.blocks/slider/Slider";
import Banner from "../../common.blocks/banner/Banner";
import Showcase from "../../common.blocks/showcase/Showcase";
import './../../common.blocks/page/page.css'
import '../../common.blocks/fonts/__proximaNovaRegular/fonts__proximaNovaRegular.css'
import './../../common.blocks/container/container.css'
import back1 from './../../common.blocks/slider/img/Ellipse12.png'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`page fonts__proximaNovaRegular`}>

                <Header/>

                {/*dots - здесь бэкграунды*/}
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
                    },]} dots={['', '', '', '']}/>
                <Banner
                    key={1}
                    linkUrl={'#'}
                    header={'Букет «Женское изящество»'}
                    bg={'#'}
                />
                <Showcase items={[
                    {
                        id: 1,
                        name: 'Букет рубиное сияние',
                        src: './images/bouquets/b1.png',
                        url: '/',
                        price: '3 150р',
                        sale: false,
                        salePrice: false,
                        percents: false
                    },
                    {
                        id: 2,
                        name: 'Шляпная коробка Нежность',
                        src: './images/bouquets/b2.png',
                        url: '/',
                        price: '4 200р',
                        sale: true,
                        salePrice: '6 300р',
                        percents: '-19%'
                    },
                    {
                        id: 3,
                        name: 'Букет Крем-карамель',
                        src: './images/bouquets/b3.png',
                        url: '/',
                        price: '2 150р',
                        sale: false,
                        salePrice: false,
                        percents: false
                    },
                    {
                        id: 4,
                        name: 'Шляпная коробка Замок',
                        src: './images/bouquets/b4.png',
                        url: '/',
                        price: '3 670р',
                        sale: true,
                        salePrice: '5 180р',
                        percents: '-32%'
                    },
                ]}/>
                <Banner
                    key={2}
                    linkUrl={'#'}
                    header={'Букет «Ангел» за 990р'}
                    bg={'#'}
                />
                <Showcase items={[
                    {
                        id: 5,
                        name: 'Букет рубиное сияние',
                        src: './images/bouquets/b1.png',
                        url: '/',
                        price: '3 150р',
                        sale: false,
                        salePrice: false,
                        percents: false
                    },
                    {
                        id: 6,
                        name: 'Шляпная коробка Нежность',
                        src: './images/bouquets/b2.png',
                        url: '/',
                        price: '4 200р',
                        sale: true,
                        salePrice: '6 300р',
                        percents: '-19%'
                    },
                    {
                        id: 7,
                        name: 'Букет Крем-карамель',
                        src: './images/bouquets/b3.png',
                        url: '/',
                        price: '2 150р',
                        sale: false,
                        salePrice: false,
                        percents: false
                    },
                    {
                        id: 8,
                        name: 'Шляпная коробка Замок',
                        src: './images/bouquets/b4.png',
                        url: '/',
                        price: '3 670р',
                        sale: true,
                        salePrice: '5 180р',
                        percents: '-32%'
                    },
                ]}/>

            </div>
        )
    }
}

export {Main};