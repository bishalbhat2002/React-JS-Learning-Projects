import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./components/CounterContext/CounterContext.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { UseReducerProvider } from "./components/CounterUseContext&UseReducer/UseReducerContext.jsx";
import { ContextProvider } from "./components/ContextComponent/ContextComponent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <CounterProvider>
        <CartProvider>
          <UseReducerProvider>
            <ContextProvider>
              <App />
            </ContextProvider>
          </UseReducerProvider>
        </CartProvider>
      </CounterProvider>
    {/* </StrictMode> */}
  </BrowserRouter>
);
