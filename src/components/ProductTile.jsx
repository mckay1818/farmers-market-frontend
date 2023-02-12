const ProductTile = (product) => {
  return (
    <div className="product-tile">
      {/* <img /> */}
      <h2>{product.name}</h2>
      <span className="product-summary">
        <p>Price: ${product.price}</p>
        <button>view details</button>
      </span>
    </div>
  );
};

export default ProductTile;
