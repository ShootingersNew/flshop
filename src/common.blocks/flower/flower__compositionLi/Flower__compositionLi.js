import React, {useState} from "react";
import Preloader from "../../preloader/Preloader";

export default function Flower__compositionLi(props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li className={'flower__compositionLi'}>
            <a className={'flower__compositionLink'} href={props.item.id} onMouseEnter={() => {
                setIsHovered(true)
            }} onMouseLeave={() => {
                setIsHovered(false)
            }}>
                {props.item.name}
                <span className="flower__compositionAmount"> {props.item.amount}</span>
            </a>
                {isHovered &&
                <div className="flower__desc">
                    <Preloader/>
                </div>
                }

        </li>
    )
}