import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function AddProductHeader() {
  return (
    <header className="header">
      <nav className="navigation d-flex justify-content-between align-items-center">
        <h2>Product Add</h2>
        <div>
          <ul className="d-flex flex-row navbar-nav justify-content-center">
            <li className="nav-item">
              <Link to="/">
                <button type="button" className="nav-button">
                  Save
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <button type="button" className="nav-button">
                  Cancel
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </header>
  );
}
