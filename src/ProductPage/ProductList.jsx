import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/contextApi";
import Card from "./Card";

const ProductList = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { products, cart } = state;

  /* ---------------------------------------------------------------- */
  // Fetch product data from localStorage
  useEffect(() => {
    const storedProductData = localStorage.getItem("productData");
    if (storedProductData) {
      const parsedProducts = JSON.parse(storedProductData);
      // Dispatch action to set products in context state
      dispatch({ type: "products", payload: parsedProducts });
      console.log("Products:", parsedProducts); // Log the parsed products from localStorage
    }
  }, [dispatch]);

  /* ---------------------------------------------------------------- */
  // Function to add a product to the cart
  const addToBasket = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      console.log("Product already in cart:", productInCart);
    } else {
      console.log("Adding product to cart:", product);
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      dispatch({ type: "cart", payload: updatedCart });
    }

    console.log("Updated Cart:", cart);
  };

  // Function to increment the quantity of a product in the cart
  const incrementProduct = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch({ type: "cart", payload: updatedCart });
    console.log("Cart after increment:", updatedCart); // Log the updated cart
  };

  // Function to decrement the quantity of a product in the cart
  const decrementProduct = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispatch({ type: "cart", payload: updatedCart });
    console.log("Cart after decrement:", updatedCart); // Log the updated cart
  };

  /* ---------------------------------------------------------------- */
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-[100px]">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              addToBasket={addToBasket}
              incrementProduct={incrementProduct}
              decrementProduct={decrementProduct}
              basket={cart}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
