import React from "react"
import {Link} from "react-router-dom"

export default function BreadcrumbsLink(props) {
    return (
        <React.Fragment>
            {
                !props.active ?
                    <Link to={props.path} className={'breadcrumbs__link'}>{props.children}</Link>
                    :
                    <span className={'breadcrumbs__active'}>{props.children}</span>
            }
        </React.Fragment>
    )
}
