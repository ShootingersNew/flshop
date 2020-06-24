import React from "react"
import cn from 'classnames'
import './preloader.css'

export default function Preloader(props) {
    let className = cn({
        preloader: true,
        [props.className]: props.className
    });
    return (
        <div className={className}>
            <div className={"lds-roller "}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}