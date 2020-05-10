import React from "react";
import connectBannersWithBD from "../../hoc/connectBannersWithBD/connectBannersWithBD";
import VerticalBanner from "../verticalBanner/VerticalBanner";
import './asideBanners.css'

function AsideBanners(props) {

    const mapBanners = props.banners.map((banner, idx) => {
        //render banners dependent on the items in the cart
        if (idx < props.itemsIn || props.itemsIn === undefined) {
            return <VerticalBanner banner={banner} className={'asideBanners__banner'}/>
        }

    });
    return (
        <div className="asideBanners">
            <div className="asideBanners__inner">
                {mapBanners}
            </div>
        </div>
    )
}

export default connectBannersWithBD(AsideBanners)