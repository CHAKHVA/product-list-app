import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

export default function ProductListHeader() {
  return (
    <header className="header d-flex flex-column justify-content-center">
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
              <button type="button" className="nav-button" id="delete-product-button">
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
