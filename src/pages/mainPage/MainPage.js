//libs
import React from "react"
//comps
import SlickSlider from "../../components/SlickSlider/SlickSlider"
import Banner from "../../components/banner/Banner"
import Showcase from "../../components/showcase/Showcase"
import OrderControl from "../../components/orderControl/OrderControl"
import Subscribe from "../../components/subscribe/Subscribe"
import Seo from "../../components/seo/seo"
import Partners from "../../components/partners/Partners"
import Container from "../../components/container/Container"
import Main from "../../components/main/Main"
//styles
import '../../components/container/container.css'
import banner from "../../components/banner/banner.module.css";
import Button from "../../components/button/Button";

class MainPage extends React.Component {
    render() {
        return (
            <Main>
                {/*dots - здесь бэкграунды*/}
                <SlickSlider
                    slides={[
                        {
                            header: 'Новинка «Фруктовый десерт»',
                            back: '../../images/slider/1.jpg'
                        }, {
                            header: 'Особенный букет для невесты ',
                            back: '../../images/slider/2.jpg'
                        }, {
                            header: 'Новинка «Фруктовый десерт»',
                            back: '../../images/slider/3.jpg'
                        }, {
                            header: 'Новинка «Фруктовый десерт»',
                            back: '../../images/slider/4.jpg'
                        },
                    ]}
                />
                <Banner
                    key={1}
                    bg={'../../images/banners/banner1.jpg'}
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
                    bg={'../../images/banners/banner2.jpg'}
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