import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">Manajemen Stok Modern</Link>
          <div className="auth-buttons"></div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/availability">Ketersediaan Barang</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/purchase">Pembelian</Link>
            </li>
            <li>
              <Link to="/signup" className="tbl-biru">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
