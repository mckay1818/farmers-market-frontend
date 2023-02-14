import "./ProductTile.css";

const ProductTile = ({ product }) => {
  console.log(product);
  return (
    <>
      {/* <img /> */}
      <h2>{product.name}</h2>
      <div className="product-summary">
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button>view details</button>
      </div>
    </>
  );
};

export default ProductTile;