import React from 'react';
import Header from "./common.blocks/header/Header";
import Footer from "./common.blocks/footer/Footer";

function App(props) {
  return (
      <div className={'page fonts__proximaNovaRegular'}>
        {props.children}

      </div>
  );
}

export default App;
