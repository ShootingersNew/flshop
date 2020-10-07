//libs
import React from "react"
import cn from 'classnames'
//styles
import './container.css'

const Container = ({children, className}) => {
    let classname = cn({
        container: true,
        [className]: className,
    });
    return (
        <div className={classname}>
            {children}
        </div>
    )
};
export default Container
