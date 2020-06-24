import React from "react";

export default class InfoContainer extends React.Component {
    componentDidMount() {
        // here we will receive information about flowers
    }

    render() {
        return (
            <React.Fragment>
                {console.log(this.props)}
                {this.props.render(this.props.name)}
            </React.Fragment>
        )
    }
}