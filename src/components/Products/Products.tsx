import React from "react";
import Product from "../Product/Product";
import "./Products.scss";
import { IProduct } from "../Product/Product";

interface Props {
  products: IProduct[]
}


export default function Products({ products } : Props) {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
