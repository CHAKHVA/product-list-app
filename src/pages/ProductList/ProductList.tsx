import React, { useState } from "react";
import Header from "../../components/Header/ProductListHeader";
import Products from "../../components/Products/Products";
import axios from "axios";
import IDContext from "../../contexts/IDContext";

const API_KEY = "https://juniortest-aleksandre-chakhvashvili.000webhostapp.com" && "http://localhost:8000"


export default function ProductList() {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    await axios
        .get(`${API_KEY}/api/read_products.php`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }

  React.useEffect(() => {
    getProducts().then(response => response);
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
      <IDContext.Provider value={{ ids, addId, removeId, getProducts }}>
        <Header />
        <Products products={products} />
      </IDContext.Provider>
    </>
  );
}
