import React from "react";
import './preloader.css'

export default function Preloader(props) {
    return (
        <div className={"preloader " + props.class}>
            <div className={"lds-roller "}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}