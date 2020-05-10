import React from "react";
import './main.css'

export default function Main(props) {
    const className = props.className ? props.className : '';

    return (
        <main className={'main ' + className}>
            {
                props.children
            }
        </main>
    )
}