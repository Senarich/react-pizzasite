import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg p-3 nav-bar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand brand" href="#">
          PIZZAMANIA
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto links">
            <li className="nav-item">
              <a className="nav-link mx-1" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-1" href="#aboutpizza">
                About Pizza
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-1" href="#pizzatypes">
                Pizza Types
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
