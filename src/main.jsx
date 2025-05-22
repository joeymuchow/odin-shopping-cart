import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/app";
import Home from "./routes/home";
import Shop from "./routes/shop";
import ErrorPage from "./routes/errorPage";
import Cart from "./routes/cart";
import Purchased from "./routes/purchased";

// TODO:
// shop page
// cart page
// get shopping items from https://fakestoreapi.com/
// state for tracking cart
// add and remove items from cart

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "purchased", element: <Purchased /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
