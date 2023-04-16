import React from "react";
import Product from "../Product/Product";
import "./Products.scss"

export default function Products() {
  return (
    <div className="products">
      <Product id={2} sku="asdca" name="Game" price={12.3} product_type="DVD" />
    </div>
  );
}
