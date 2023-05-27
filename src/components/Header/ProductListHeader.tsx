import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import axios from "axios";
import IDContext from "../../contexts/IDContext";

const API_KEY = "https://juniortest-aleksandre-chakhvashvili.000webhostapp.com" || "http://localhost:8000"

export default function ProductListHeader() {
  const { ids, getProducts } = useContext(IDContext);

  const handleClick = async () => {
    const jsonData = JSON.stringify({ids : ids});
    await axios
      .post(`${API_KEY}/api/delete_products.php`, jsonData)
      .then((response) => {
        getProducts();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header className="header">
      <nav className="navigation d-flex justify-content-between align-items-center">
        <h2>Product List</h2>
        <div>
          <ul className="d-flex flex-row navbar-nav justify-content-center">
            <li className="nav-item">
              <Link to="/addproduct">
                <button type="button" className="nav-button">
                  ADD
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-button"
                id="delete-product-button"
                onClick={handleClick}
              >
                MASS DELETE
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  );
}
