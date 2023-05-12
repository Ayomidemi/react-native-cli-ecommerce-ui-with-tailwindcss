import React from 'react';

import {ThemeProvider} from 'styled-components';
import {
  MeetingProvider,
  lightTheme,
} from 'amazon-chime-sdk-component-library-react';

import Main from './Main';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* @ts-ignore */}
      <MeetingProvider>
        <Main />
      </MeetingProvider>
    </ThemeProvider>
  );
}

export default App;
