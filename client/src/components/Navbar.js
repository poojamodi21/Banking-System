import React from "react";
import { Link, swi } from "react-router-dom";
function Navbar() {
  return (
    <div class="navbar-fixed">
      <div className="Navbar-contaner">
        <nav className="#263238 blue-grey darken-4" role="navigation">
          <div className="nav-wrapper container">
            <Link
              style={{ fontSize: "2.5rem" }}
              id="logo-container"
              to="/"
              className="brand-logo"
            >
              TSF
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link style={{ fontSize: "1.5rem" }} to="/customers">
                  View all customers
                </Link>
              </li>
              <li>
                <Link style={{ fontSize: "1.5rem" }} to="/transactions">
                  View all transactions
                </Link>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <Link to="/customers">View all customers</Link>
              </li>
              <li>
                <a href="./transactions">View all transactions</a>
              </li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
