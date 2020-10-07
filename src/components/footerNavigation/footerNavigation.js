import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import cn from 'classnames'
import {useWindowSize} from "../../config/utils";
import './style.css'

const FooterNavigation = ({nav, className}) => {
    const [isOpen, setIsOpen] = useState(false);
    let windowWidth = useWindowSize()[0];
    const isMobile = windowWidth <= Number(process.env.REACT_APP_MOBILE_BREAKPOINT);
    const navClassName = cn({
        footerNavigation__wrapper: true,
        [`${className}`]: className
    });
    const listClassName = cn({
        footerNavigation__list: true,
        footerNavigation__list_closed: !isOpen && isMobile
    });
    useEffect(() => {
        //If mobile screen res && default open prop is true
        if (isMobile && nav.isOpen) {
            setIsOpen(true)
        }
    }, [nav, isMobile]);
    const clickHandler = () => {
        setIsOpen(!isOpen)
    };
    const renderItems = () => {
        return (
            nav.li.map((li) => {
                return (
                    <li key={li.id} className="footerNavigation__li">
                        <Link to={li.url}>{li.name}</Link>
                    </li>
                )
            })
        )
    };
    return (
        <div className={navClassName}>
            <div onClick={clickHandler} className="footerNavigation__control">
                <span className={'footerNavigation__tick footerNavigation__tick_isOpened_' + !isOpen}/>
                О компании
            </div>
            <ul key={nav.id} className={listClassName}>
                {renderItems()}
            </ul>
        </div>
    )
};
export default FooterNavigation
