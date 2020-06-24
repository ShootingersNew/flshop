import React, {useState} from "react";
import Preloader from "../../preloader/Preloader";
import CompositionDescription from "./CompositionDescription";

export default function CompositionItem(props) {
    const [loadStatus, setLoadStatus] = useState(true);
    return (
        <React.Fragment>
            <td className={'composition__column'}>
                <a className={'composition__link'} href={props.item.id}>
                    {props.item.name}
                    <span className="composition__amount"> {props.item.amount}</span>
                </a>
                <div className="composition__desc">
                    <CompositionDescription name={props.item.name}/>
                </div>
            </td>
        </React.Fragment>
    )
}