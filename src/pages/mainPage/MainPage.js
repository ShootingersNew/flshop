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
import Main from "../../components/main/Main"
//styles
import '../../components/container/container.css'


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
                    mobileHeader={"Женственные \n подарки к 8 марта"}
                    header={" Подарки \n к заказам на 8 марта"}
                    buttonText={"Подробнее"}
                />

                {/*showcase обернут в hoc withBDComponent, idx - индекс showcase в базе данных*/}

                <Showcase
                    header={'Женственные подарки к 8 марта'}
                    idx={'showcase_1'}
                    showcaseType={'mini'}

                />
                <Banner
                    key={2}
                    bg={'../../images/banners/banner2.jpg'}
                    mobileHeader={'Летние акции'}
                    header={'Скидка -20% на летние букеты'}
                    buttonText={'Подробнее'}

                />
                <Showcase
                    header={'Летние акции'}
                    idx={'showcase_2'}
                    showcaseType={'mini'}
                />

                <OrderControl/>
                <Subscribe/>
                <Seo/>
                <Partners/>

            </Main>
        )
    }
}

export {MainPage};
