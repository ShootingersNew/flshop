import React from 'react';

function App(props) {
  return (
      <div className={'page fonts__proximaNovaRegular'}>
        {props.children}
      </div>
  );
}

export default App;
