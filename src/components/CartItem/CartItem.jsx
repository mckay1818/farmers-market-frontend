import "./CartItem.css";

const CartItem = ({ product }) => {
  const { name, price, quantity } = product;
  return (
    <div className="item-tile">
      <h2 className="product-label">{name}</h2>
      <div className="product-details">
        <p>Quantity: {quantity}</p>
        <p>Price per item: {price}</p>
        <p>Subtotal: {quantity * price} </p>
      </div>
    </div>
  );
};

export default CartItem;
