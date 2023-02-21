import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  // console.log(products);
  return (
    <div className="Product_container">
      <div  className="hello   grid place-items-center">
        {products.map((product) => {
          let discountedPrice =
            product.price - product.price *(product.discountPercentage / 100);

          return (
            <Product
              key={product.id}
              product={{ ...product, discountedPrice }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
