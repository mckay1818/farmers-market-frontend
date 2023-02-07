const ProductsContainer = (products) => {
  return (
    <main className="products-container">
      {products.map(({ name }) => (
        <div className="product-container">
          {/* <img /> */}
          <h2>{name}</h2>
          <span className="product-summary">
            <p>Price: $XX.XX</p>
            <button>view details</button>
          </span>
        </div>
      ))}
    </main>
  );
};

export default ProductsContainer;
