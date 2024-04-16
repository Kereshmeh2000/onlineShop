import React from "react";
import './footer.css'

export default function Footer(){
    return(
        <>

<div className="wave1">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="svg1"
      >
        <path
          d="M-1.41,117.94 C149.99,150.00 348.47,-8.36 504.22,127.80 L500.00,150.00 L0.00,150.00 Z"
          className="path1"
        ></path>
      </svg>
    </div>

        <footer>
      <div className="container pt-5 ">
        <div className="row py-5">
          <div className="col-md-4">
            <h2>Your Logo</h2>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              optio?
            </p>
            <a href="#"><i className="bi bi-instagram fs-2 text-dark"></i></a>
            <a href="#"><i className="bi bi-telegram fs-2 mx-3 text-dark"></i></a>
            <a href="#"><i className="bi bi-facebook fs-2 me-3 text-dark"></i></a>
            <a href="#"><i className="bi bi-linkedin fs-2 text-dark"></i></a>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <h4 className="footer-title w-75">Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li className="footer-item">Lorem</li>
                  <li className="footer-item">Lorem</li>
                  <li className="footer-item">Lorem</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="footer-title w-75">Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li className="footer-item">Lorem</li>
                  <li className="footer-item">Lorem</li>
                  <li className="footer-item">Lorem</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="footer-title w-75">Lorem ipsum</h4>
                <ul className="list-unstyled">
                  <li className="footer-item">Lorem</li>
                  <li className="footer-item">Lorem</li>
                  <li className="footer-item">Lorem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <p className="text-center">Design and developed by Example</p>
      </div>
        </footer>

        </>
    )
}