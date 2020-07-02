//libs
import React from "react"
//comps
import SlickSlider from "../../common.blocks/SlickSlider/SlickSlider"
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
import banner from "../../common.blocks/banner/banner.module.css";
import Button from "../../common.blocks/button/Button";

class MainPage extends React.Component {
    render() {
        return (
            <Main>
                {/*dots - здесь бэкграунды*/}
                <SlickSlider
                    slides={[
                        {
                            header: 'Новинка «Фруктовый десерт»',
                            back: '../../images/slider/1.png'
                        }, {
                            header: 'Особенный букет для невесты ',
                            back: '../../images/slider/2.png'
                        }, {
                            header: 'Новинка «Фруктовый десерт»',
                            back: '../../images/slider/3.png'
                        }, {
                            header: 'Новинка «Фруктовый десерт»',
                            back: '../../images/slider/4.png'
                        },
                    ]}
                />
                <Banner
                    key={1}
                    bg={'../../images/banners/banner1.png'}
                    render={
                        <React.Fragment>
                            <header className={banner.banner__header + ' fonts__proximaNovaBold'}>
                                Подарки <br/> к заказам на 8 марта
                            </header>
                            <Button className={'banner__link'}>Подробнее</Button>
                        </React.Fragment>
                    }
                />

                {/*showcase обернут в hoc withBDComponent, idx - индекс showcase в базе данных*/}

                <Showcase
                    header={'Женственные подарки к 8 марта'}
                    idx={'showcase_1'}
                    showcaseType={'mini'}
                    counter={6}
                />
                <Banner
                    key={2}
                    bg={'../../images/banners/banner2.png'}
                    render={
                        <React.Fragment>
                            <header className={banner.banner__header + ' fonts__proximaNovaBold'}>
                                Подарки к заказам на 8 марта
                            </header>
                            <Button className={'banner__link'}>Заказать</Button>
                        </React.Fragment>
                    }

                />
                <Showcase
                    header={'Летние акции'}
                    idx={'showcase_2'}
                    showcaseType={'mini'}
                    counter={11}
                />
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