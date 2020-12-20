import React from "react";
import Search from "../search/Search";
import './style.css'

const MobileSearch = () => {
    return (
        <>
            <div className={'mobileSearch__img'} style={{backgroundImage: `url(../../images/banners/banner1.jpg)`}}/>
            <Search defaultItems/>

        </>
    )
};
export default MobileSearch
