import React from "react"
import './listingSidebar.css'

export default function ListingSidebar(props) {
    return (
        <React.Fragment>
            <aside className="listingSidebar">
                {props.children}
            </aside>
        </React.Fragment>
    )
}
