import React from 'react';
import { Global } from '@emotion/react';

import MainStyles from 'styles';
import Home from 'pages/Home/Home';

function App() {
  return (
    <>
      <Global styles={MainStyles} />
      <Home />
    </>
  );
}

export default App;
