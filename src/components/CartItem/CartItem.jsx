import "./CartItem.css";

const CartItem = ({ product }) => {
  const { name, quantity, price } = product;
  return (
    <div className="item-tile">
      <h2>Product: {name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Price per item: {price}</p>
      <p>Subtotal: {quantity * price} </p>
    </div>
  );
};

export default CartItem;
