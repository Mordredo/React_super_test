import React from 'react';
import {ThemeProvider, Container} from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './components/header/Header';
import Pages from './components/pages/Pages';

import CustomTheme from './theme/Theme';

const theme = CustomTheme;

function App() {
  return (
    <ThemeProvider theme={theme}>
			<Container maxWidth={false} disableGutters={true}>
        <Header/>
        <Router>
          <Pages/>
        </Router>
			</Container>
    </ThemeProvider>
  );
}

export default App;
