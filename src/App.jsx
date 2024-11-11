import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { StoreProvider } from "./context/contextApi";
import Layout from "./components/Layout";
import Home from "./components/Home";

import ProductList from "./ProductPage/ProductList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Route>
    )
  );
  return (
    <>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </>
  );
}

export default App;
