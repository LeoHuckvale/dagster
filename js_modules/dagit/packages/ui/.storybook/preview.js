import {
  FontFamily,
  GlobalInter,
  GlobalInconsolata,
  GlobalDialogStyle,
  GlobalPopoverStyle,
  GlobalSuggestStyle,
  GlobalToasterStyle,
  GlobalTooltipStyle,
  Colors,
} from '../src';

import {MemoryRouter} from 'react-router-dom';
import * as React from 'react';

import {createGlobalStyle} from 'styled-components/macro';

import './blueprint.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    color: ${Colors.Gray800};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a,
  a:hover,
  a:active {
    color: ${Colors.Link};
  }

  body {
    margin: 0;
    padding: 0;
  }

  body, input, select, textarea {
    font-family: ${FontFamily.default};
  }

  button {
    font-family: inherit;
  }

  code, pre {
    font-family: ${FontFamily.monospace};
    font-size: 16px;
  }

  .material-icons {
    display: block;
  }

  /* todo dish: Remove these when we have buttons updated. */

  .bp3-button .material-icons {
    position: relative;
    top: 1px;
  }

  .bp3-button:disabled .material-icons {
    color: ${Colors.Gray300}
  }
`;

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyle />
      <GlobalInter />
      <GlobalInconsolata />
      <GlobalToasterStyle />
      <GlobalTooltipStyle />
      <GlobalPopoverStyle />
      <GlobalDialogStyle />
      <GlobalSuggestStyle />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};
