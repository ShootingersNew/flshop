//libs
import React from "react"
//comps
import Slides from "../../common.blocks/slider/Slider"
import Banner from "../../common.blocks/banner/Banner"
import Showcase from "../../common.blocks/showcase/Showcase"
import OrderControl from "../../common.blocks/orderControl/OrderControl"
import Subscribe from "../../common.blocks/subscribe/Subscribe"
import Seo from "../../common.blocks/seo/seo"
import Partners from "../../common.blocks/partners/Partners"
import Container from "../../common.blocks/container/Container"
import Main from "../../common.blocks/main/Main"
//styles
import '../../common.blocks/container/container.css'
import back1 from '../../common.blocks/slider/img/Ellipse12.png'

class MainPage extends React.Component {
    render() {
        return (
            <Main>
                {/*dots - здесь бэкграунды*/}
                <Slides
                    slides={[
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
                        },
                    ]}
                    dots={['', '', '', '']}/>
                <Banner
                    key={1}
                    linkUrl={'#'}
                    header={'Букет «Женское изящество»'}
                    bg={'#'}
                />

                {/*showcase обернут в hoc withBDComponent, idx - индекс showcase в базе данных*/}

                <Showcase header={'Женственные подарки к 8 марта'} idx={'showcase_1'}/>
                <Banner
                    key={2}
                    linkUrl={'#'}
                    header={'Букет «Ангел» за 990р'}
                    bg={'#'}
                />
                <Showcase header={'Летние акции'} idx={'showcase_2'}/>
                <Container>
                    <OrderControl/>
                    <Subscribe/>
                    <Seo/>
                    <Partners/>
                </Container>
            </Main>
        )
    }
}

export {MainPage};