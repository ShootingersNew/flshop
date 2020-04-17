import React from "react";
import './../../common.blocks/page/page.css'
import './../../common.blocks/fonts/__proximaNovaRegular/fonts__proximaNovaRegular.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'page fonts__proximaNovaRegular'}>
                Main page
            </div>
        )
    }
}

export {Main};