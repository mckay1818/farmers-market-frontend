import { createContext, useState } from "react";

const addItemToCartContext = (cartItems, product) => {
  let updatedCartItems = [];
  const itemInCart = cartItems.find((item) => item.id === product.id);
  if (itemInCart) {
    updatedCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
  }
  return updatedCartItems;
};

export const CartContext = createContext({
  cartItems: [],
  total: 0,
  addItemToCart: () => {},
  setTotal: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addItemToCartContext(product));
  };

  const addToTotal = (price) => {
    setTotal(total + price);
    console.log(total);
  };

  const value = { cartItems, addItemToCart, addToTotal, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
