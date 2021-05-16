import { css } from '@emotion/react';

export default css`
  #root {
    height: 100%;
    min-height: 100%;
  }

  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
    background-size: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    overflow-x: hidden;
    margin: 0;
  }
  body,
  html {
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  button {
    font-family: 'Roboto';
  }
`;
