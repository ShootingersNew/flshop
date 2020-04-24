import React from "react";
import Slides from "../../common.blocks/slider/Slider";
import Banner from "../../common.blocks/banner/Banner";
import Showcase from "../../common.blocks/showcase/Showcase";
import OrderControl from "../../common.blocks/orderControl/OrderControl";
import Subscribe from "../../common.blocks/subscribe/Subscribe";
import Seo from "../../common.blocks/seo/seo";
import Partners from "../../common.blocks/partners/Partners";
import './../../common.blocks/container/container.css'
import back1 from './../../common.blocks/slider/img/Ellipse12.png'

class Main extends React.Component {
    render() {
        return (
            <main>

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

                {/*showcase обернут в hoc withBDComponent, idx - индекс showcase в базе данных*/}
                <Showcase idx={'showcase_1'}/>
                <Banner
                    key={2}
                    linkUrl={'#'}
                    header={'Букет «Ангел» за 990р'}
                    bg={'#'}
                />
                <Showcase idx={'showcase_2'}/>
                <OrderControl/>
                <Subscribe/>
                <Seo/>
                <Partners/>
            </main>
        )
    }
}

export {Main};