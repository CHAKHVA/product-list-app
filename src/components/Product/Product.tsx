import React from "react";
import "./Product.scss";

export interface User {
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

export default function Product(user: User) {
  type UserValue = User[keyof User];
  const values: UserValue[] = Object.values(user);
  return (
    <div className="product" id={user.id.toString()}>
      <input
        type="checkbox"
        name=""
        id={user.id.toString()}
        className="delete-checkbox"
      />
      <ul className="product-items">
        {values.map((item) => (
          <li className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
