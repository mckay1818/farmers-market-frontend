import React from "react";

const App = () => {
  const products = [
    {
      name: "Sweet Corn",
      price: 3,
      quantity: 20,
      image_file: null,
      description: "Delicious sweet corn",
    },
    {
      name: "Sweet Corn",
      price: 3,
      quantity: 20,
      image_file: null,
      description: "Delicious sweet corn",
    },
  ];

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

export default App;
