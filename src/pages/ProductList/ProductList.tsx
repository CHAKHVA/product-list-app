import React from "react";
import Header from "../../components/Header/ProductListHeader";
import Products from "../../components/Products/Products";
import { IProduct } from "../../components/Product/Product";

export default function ProductList() {
  const products: IProduct[] = [
    {
      id: 1,
      sku: 'DVD123',
      name: 'The Lord of the Rings Trilogy',
      price: 29.99,
      product_type: 'DVD'
    },
    {
      id: 2,
      sku: 'BK456',
      name: 'To Kill a Mockingbird',
      price: 12.99,
      product_type: 'Book',
      weight: 0.5
    },
    {
      id: 3,
      sku: 'FRN789',
      name: 'Leather Sofa',
      price: 599.99,
      product_type: 'Furniture',
      height: 36,
      width: 84,
      length: 36
    },
    {
      id: 4,
      sku: 'DVD567',
      name: 'Inception',
      price: 14.99,
      product_type: 'DVD'
    },
    {
      id: 5,
      sku: 'BK234',
      name: 'The Great Gatsby',
      price: 9.99,
      product_type: 'Book',
      weight: 0.4
    },
    {
      id: 6,
      sku: 'FRN246',
      name: 'Coffee Table',
      price: 299.99,
      product_type: 'Furniture',
      height: 18,
      width: 48,
      length: 24
    },
    {
      id: 7,
      sku: 'DVD789',
      name: 'The Dark Knight',
      price: 12.99,
      product_type: 'DVD'
    },
    {
      id: 8,
      sku: 'BK345',
      name: 'Pride and Prejudice',
      price: 8.99,
      product_type: 'Book',
      weight: 0.3
    },
    {
      id: 9,
      sku: 'FRN012',
      name: 'Dining Table',
      price: 799.99,
      product_type: 'Furniture',
      height: 30,
      width: 84,
      length: 36
    },
    {
      id: 10,
      sku: 'DVD456',
      name: 'The Matrix',
      price: 11.99,
      product_type: 'DVD'
    }
  ];
  
  return (
    <>
      <Header />
      <Products products={ products }/>
    </>
  );
}
