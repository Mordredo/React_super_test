import React from "react";
import { ThemeProvider, Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { createStore } from "redux";

import reducer from "./store/reducers";

import Pages from "./components/pages/Pages";

import CustomTheme from "./theme/Theme";

const theme = CustomTheme;

const { store, persistor } = reducer();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <Container maxWidth={false} disableGutters={true}>
              <Router>
                <Pages />
              </Router>
            </Container>
          </ThemeProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
}

export default App;
