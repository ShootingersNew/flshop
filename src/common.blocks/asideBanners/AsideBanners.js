import React from "react";
import connectBannersWithBD from "../../hoc/connectBannersWithBD/connectBannersWithBD";
import VerticalBanner from "../verticalBanner/VerticalBanner";
import './asideBanners.css'

AsideBanners.propTypes = {
    type: PropTypes.string,
    banners: PropTypes.array.isRequired,
    className: PropTypes.string
};

function AsideBanners(props) {
    let className = cn({
        'asideBanners': true,
        [props.className]: props.className
    });
    const mapBanners = () => {
        return props.banners.map((banner, idx) => {
            //render banners dependent on the items in the cart
            if (idx < props.count || props.count === undefined) {
                return <VerticalBanner
                    type={props.type ? props.type : null}
                    banner={banner}
                    className={'asideBanners__banner'}
                />
            }

        });
    };
    return (
        <div className="asideBanners">
            <div className="asideBanners__inner">
                {mapBanners}
            </div>
        </div>
    )
}

export default connectBannersWithBD(AsideBanners)