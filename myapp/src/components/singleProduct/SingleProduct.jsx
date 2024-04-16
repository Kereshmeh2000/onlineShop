import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.jsx";
import TopBtn from "../TopBtn/TopBtn.jsx";
import { addCart } from "../Store/cart.js";

const SingleProduct = () => {
  const singleProduct = useSelector((state) => state.singleProduct);

  const dispatch = useDispatch()

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

 

    // useEffect(() => {
    //     return () => {
    //         console.log('called')
    //         dispatch(reset([]))
    //     }
    // },[])


  return (
    <>
      <Header />
      <TopBtn />
      <div className="continer">
        <div className="row">
          <div className="col-md-6">
            {singleProduct.map((product) => (
              <div className="col-md-4 mt-5" key={product.id}>
                <div>
                  <img
                    className="card-img-top cart-img"
                    src={product.image}
                    alt="Product"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {singleProduct.map((product) => (
              <div>
                <h5>{product.title}</h5>
                <p>{product.price} $</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <button
                  className="cart-btn btn"
                  onClick={() => handleAdd(product)}
                >
                  Add to cart
                   {/* <Icon.Cart2 /> */}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingleProduct;
