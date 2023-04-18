import React, { useId } from "react";
import "./Product.scss";

export interface IProduct {
  id: number;
  sku: string;
  name: string;
  price: number;
  product_type: "DVD" | "Book" | "Furniture";
  size?: number;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
}

export default function Product(product: IProduct) {
  type ProductValue = IProduct[keyof IProduct];
  const values: ProductValue[] = Object.values(product);
  return (
    <div className="product" id={product.id.toString()}>
      <input
        type="checkbox"
        name=""
        id={product.id.toString()}
        className="delete-checkbox"
      />
      <ul className="product-items">
        {values.map((item) => (
          <li key={useId()} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
