//libs
import React from "react"
import cn from 'classnames'
//styles
import './container.css'

const Container = (props) => {
    let classname = cn({
        container: true,
        [props.classname]: props.classname
    });
    return (
        <div className={classname}>
            {props.children}
        </div>
    )
};
export default Container