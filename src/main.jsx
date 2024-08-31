import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductDetail from "./Components/ProductDetails/ProductDetail.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import { AppProvider } from "./ContextApi/ContextApi.jsx";
import { Provider } from "react-redux";
import {store} from "./Components/Redux/store.jsx";
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      <Route path="Cart" element={<Cart />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
  </Provider>

);
