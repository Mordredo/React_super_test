import React from 'react';
import {ThemeProvider, Container} from '@material-ui/core';


import Header from './components/header/Header';
import Blog from './components/blog/Blog';

import CustomTheme from './Theme';

const theme = CustomTheme;

function App() {
  return (
    <ThemeProvider theme={theme}>
			<Container maxWidth={false} disableGutters={true}>
        <Header/>
        <Blog/>
			</Container>
    </ThemeProvider>
  );
}

export default App;
