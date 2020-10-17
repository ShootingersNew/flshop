import React from "react"
import Container from "../container/Container";
//comps
import CompositionDescription from "./CompositionDescription";

export default function CompositionItem(props) {
    return (
        <React.Fragment>
            <td className={'composition__column'}>
                <a onClick={(e) => e.preventDefault()} className={'composition__link'} href={props.item.id}>
                    {props.item.name}
                    <span className="composition__amount"> {props.item.amount}</span>
                </a>

                <div className="composition__desc">
                    <CompositionDescription amount={props.item.amount} name={props.item.name}/>
                </div>
            </td>
        </React.Fragment>
    )
}
