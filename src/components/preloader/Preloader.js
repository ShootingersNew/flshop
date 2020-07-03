import React from "react"
import cn from 'classnames'
//styles
import './preloader.css'
//forwardRef is needed for lazy loader
const Preloader = React.forwardRef((props, ref) => {
        let className = cn({
            preloader: true,
            [props.className]: props.className
        });
        return (
            <div className={className} ref={ref}>
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
);
export default Preloader