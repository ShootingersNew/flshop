//libs
import React from "react"
import PropTypes from 'prop-types'
//comps
import BreadcrumbsLink from "./BreadcrumbsLink"
//styles
import './breadcrumbs.css'

export default function Breadcrumbs({items}) {
    Breadcrumbs.propTypes = {
        items: PropTypes.array.isRequired
    };
    return (
        <div className="breadcrumbs">
            {items && items.map((item, i) => (
                <BreadcrumbsLink key={i} active={i === items.length - 1} path={item.path}>{item.title}</BreadcrumbsLink>
            ))
            }

        </div>
    )
}