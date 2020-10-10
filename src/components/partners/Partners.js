import React from "react"
import Container from "../container/Container"
import LogoSlider from "../logoSlider/SlickSlider"
import {useIsMobile} from "../../config/utils";
//styles
import './../svgfont/svgfont.css'
import './partners.css'
//svg
import svg1 from './svg/logo1.svg'
import svg2 from './svg/logo2.svg'
import svg3 from './svg/logo3.svg'
import svg4 from './svg/logo4.svg'
import svg5 from './svg/logo5.svg'

export default function Partners() {
    const isMobile = useIsMobile();
    return isMobile ?
        <LogoSlider>
            <div className={'partners__logo '}><img alt={'logo'} src={svg1}/></div>
            <div className={'partners__logo partners__verizon '}><img alt={'logo'} src={svg2}/></div>
            <div className={'partners__logo partners__citibank'}><img alt={'logo'} src={svg3}/></div>
            <div className={'partners__logo partners__worldplay'}><img alt={'logo'} src={svg4}/></div>
            <div className={'partners__logo partners__sandisk'}><img alt={'logo'} src={svg5}/></div>
        </LogoSlider>
        :
        <div className="partners">
            <Container className="partners__container">
                <img className={'partners__logo '} alt={'logo'} src={svg1}/>
                <img className={'partners__logo partners__verizon '} alt={'logo'} src={svg2}/>
                <img className={'partners__logo partners__citibank'} alt={'logo'} src={svg3}/>
                <img className={'partners__logo partners__worldplay'} alt={'logo'} src={svg4}/>
                <img className={'partners__logo partners__sandisk'} alt={'logo'} src={svg5}/>
            </Container>
        </div>
}
