import React from 'react';
import { Global } from '@emotion/react';

import MainStyles from 'styles';
import 'css.gg/icons/all.css';
import Home from 'pages/Home';

function App() {
  return (
    <>
      <Global styles={MainStyles} />
      <Home />
    </>
  );
}

export default App;
