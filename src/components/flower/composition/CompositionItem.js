import React from "react";
//comps
import CompositionDescription from "./CompositionDescription";

export default function CompositionItem(props) {
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