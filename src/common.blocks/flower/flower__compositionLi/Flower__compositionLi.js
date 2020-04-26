import React, {useState} from "react";
import Preloader from "../../preloader/Preloader";

export default function Flower__compositionLi() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li className={'flower__compositionLi'}>
            <a className={'flower__compositionLink'} href="#" onMouseEnter={() => {
                setIsHovered(true)
            }} onMouseLeave={() => {
                setIsHovered(false)
            }}>
                tttttt
                {isHovered &&
                <div className="flower__desc">
                    <Preloader/>
                </div>
                }
            </a>
        </li>
    )
}