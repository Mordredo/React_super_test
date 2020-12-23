import React from "react";
import { ThemeProvider, Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "./store/reducers";

import Pages from "./components/pages/Pages";

import CustomTheme from "./theme/Theme";

const theme = CustomTheme;

function App() {
  return (
    <Provider store={reducer}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters={true}>
          <Router>
            <Pages />
          </Router>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
