import React from "react";

const Container = (props) => {
    let classname = 'container';
    if (props.classname) {
        classname = classname + ' ' + props.classname
    }
    return (
        <div className={classname}>
            {props.children}
        </div>
    )
};
export default Container