import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import TopBtn from "../TopBtn/TopBtn.jsx";
import "./products.css";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/cart.js";
import { NavLink } from "react-router-dom";
import { show } from "../Store/singleProduct.js";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  };

  

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <TopBtn />
      <Header />

      <NavLink to={"/singleproduct"}>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div
                className="col-md-4 mt-5"
                key={product.id}
                onClick={() => {
                  dispatch(show(product))
                }}
              >
                <div className="card">
                  <img
                    className="card-img-top cart-img"
                    src={product.image}
                    alt="Product"
                    q
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} $</p>
                    {/* <button
                      className="cart-btn btn"
                      onClick={() => handleAdd(product)}
                    >
                      Add to cart <Icon.Cart2 />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </NavLink>

      <Footer />
    </>
  );
}
