import React from 'react'
import Page from "./components/page/Page"
import './components/_settings/_base.css'

function App(props) {
    return (
        <Page>
            {props.children}
        </Page>
    );
}

export default App;
