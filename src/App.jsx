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
import CartPage from "./pages/CartPage";
import SignInPage from './pages/SignInPage';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInPage />} /> 
      </Route>
    )
  );

  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
