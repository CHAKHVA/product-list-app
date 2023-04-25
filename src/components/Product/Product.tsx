import React, { ChangeEvent, useContext } from "react";
import "./Product.scss";
import IDContext from "../../contexts/IDContext";

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
  const { ids, addId, removeId } = useContext(IDContext);

  type ProductValue = IProduct[keyof IProduct];
  const values: ProductValue[] = Object.values(product);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!ids.includes(parseInt(e.target.id))) {
        addId(parseInt(e.target.id));
      }
    } else {
      if (ids.includes(parseInt(e.target.id))) {
        removeId(parseInt(e.target.id));
      }
    }
  };

  return (
    <div className="product" id={product.id.toString()}>
      <input
        type="checkbox"
        name=""
        id={product.id.toString()}
        className="delete-checkbox"
        onChange={handleChange}
      />
      <ul className="product-items">
        {values.map(
          (item, index) =>
            item &&
            item !== product.id && (
              <li
                key={product.id.toString() + index + item}
                className="list-item"
              >
                {item}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
