import React from "react";
import "./header.css";
import * as Icon from "react-bootstrap-icons";
import { openMenu, closeMenu } from "../Home/main";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import cart from "../Store/cart";

export default function Header() {
  const cartLength = useSelector((state) => state.cart.length);


  return (
    <>
      <header className="w-100 ">
        <nav className="desktop-nav">
          <div className="row nav-row">
            <div className="col-5 text-light">
              <div className="d-flex justify-content-around align-items-center list-unstyled">
                <NavLink className="nav-item nav-link desktop-nav-item" to="/">
                  Home
                </NavLink>
                <NavLink
                  className="nav-item nav-link desktop-nav-item"
                  to="/products"
                >
                  Products
                </NavLink>
                <NavLink
                  className="nav-item nav-link desktop-nav-item"
                  to="/blog"
                >
                  Blog
                </NavLink>
                <NavLink
                  className="nav-item nav-link desktop-nav-item"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="nav-item nav-link desktop-nav-item"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="col-3 navbar-brand text-primary text-center">
              Your Logo
            </div>
            <div className="col-4 d-flex justify-content-end">
              <NavLink
                className="desktop-menu-icon indicator-wrapper"
                to={"/cart"}
              >
                <div className="indicator">{cartLength}</div>
                <Icon.Cart2 />
              </NavLink>
              <div className="desktop-menu-icon">
                <Icon.Person />
              </div>
            </div>
          </div>
        </nav>

        <nav className="responsive-nav">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4">
                <div id="side-navigation-drawer" className="shadow">
                  <div className="row">
                    <a className="close-btn" onClick={closeMenu}>
                      &times;
                    </a>

                    <NavLink
                      className="nav-item nav-link desktop-nav-item"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="nav-item nav-link desktop-nav-item"
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      className="nav-item nav-link desktop-nav-item"
                      to="/about"
                    >
                      About
                    </NavLink>
                    <NavLink
                      className="nav-item nav-link desktop-nav-item"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>

                <a className="menu-btn text-center" onClick={openMenu}>
                  <Icon.List className="menu-icon" />
                </a>
              </div>

              <div className="col-4 navbar-brand text-primary text-center">
                Your Logo
              </div>
              <div className="col-4 text-center">
                <Icon.Person className="desktop-menu-icon" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
