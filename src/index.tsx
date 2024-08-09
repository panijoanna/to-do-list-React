import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./core/GlobalStyle";
import { theme } from "./core/theme";
import { ThemeProvider } from "styled-components";
import store from "./store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
