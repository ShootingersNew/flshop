import React from 'react';
import Page from "./common.blocks/page/Page";
function App(props) {
    return (
        <Page>
            {props.children}
        </Page>
    );
}

export default App;
