import "./ProductTile.css";

const ProductTile = ({ product }) => {
  console.log(product);
  return (
    <>
      {/* <img /> */}
      <h2>{product.name}</h2>
      <span className="product-summary">
        <p>Price: ${product.price}</p>
        <button>view details</button>
      </span>
    </>
  );
};

export default ProductTile;
