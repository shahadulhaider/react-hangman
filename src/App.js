import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
