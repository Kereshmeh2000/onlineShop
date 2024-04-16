import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import TopBtn from "../TopBtn/TopBtn.jsx";
import { useDispatch, useSelector } from "react-redux";
import cartimg from '../images/blueCart.png'
import './cart.css'
import {  remove } from "../Store/cart.js";

const Card = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const handleDelete = (product) =>{
    dispatch(remove(product));
  }

  return (
    <>
      <TopBtn />
      <Header />

      <div className="container mt-5">
        {cart.length === 0 ? (
              <>
              <img className="d-flex justify-content-center mx-auto" src={cartimg} />
              <h1 className="text-center mt-5">Your shopping cart is empty</h1>
              </>
        ) : (
          <div className="row">
            {cart.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card">
                  <img
                    className="card-img-top cart-img"
                    src={product.image}
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} $</p>
                  </div>
                  <button className="cart-btn btn" onClick={() => handleDelete(product)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Card;
