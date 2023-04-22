import React, { useState } from "react";
import Header from "../../components/Header/ProductListHeader";
import Products from "../../components/Products/Products";
import axios from "axios";
import IDContext from "../../contexts/IDContext";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/read_products.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [ids, setIds] = useState<number[]>([]);

  const addId = (id: number) => {
    setIds((prevIds) => [...prevIds, id]);
  };

  const removeId = (id: number) => {
    setIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
  };

  return (
    <>
      <IDContext.Provider value={{ ids, addId, removeId }}>
        <Header />
        <Products products={products} />
      </IDContext.Provider>
    </>
  );
}
