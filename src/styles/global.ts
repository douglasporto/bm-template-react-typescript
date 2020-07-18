import { createGlobalStyle } from 'styled-components';
import { invert } from 'polished';
import * as V from './variables';

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons'); */
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }

  body.dark {
    --themeColor: ${V.Color.themeColor};
    --bg: ${V.Color.backgroundDark};
    --bgSolid: ${V.Color.bgSecondaryDark};
    --bgSecondary: ${V.Color.bgSecondaryDark};
    --bgInput: ${V.Color.bgInputDark};
    --bgInputTxt: ${invert(V.Color.bgInputDark)};
  }

  body.light {
    --themeColor: ${V.Color.themeColor};
    --bg: ${invert(V.Color.backgroundDark)};
    --bgSolid: ${invert(V.Color.bgSecondaryDark)};
    --bgSecondary: ${invert(V.Color.bgSecondaryDark)};
    --bgInput: ${invert(V.Color.bgInputDark)};
    --bgInputTxt: ${V.Color.bgInputDark};
  }

  body {
    background: var(--bg);
    color: var(--bgSecondary);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
