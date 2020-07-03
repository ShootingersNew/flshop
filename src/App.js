import React from 'react';
import Page from "./components/page/Page";

function App(props) {
    return (
        <Page>
            {props.children}
        </Page>
    );
}

export default App;
