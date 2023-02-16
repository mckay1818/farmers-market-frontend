import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    let updatedCartItems = [];
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart) {
      updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...product }];
    }
    setCartItems(updatedCartItems);
  };

  const value = { cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
