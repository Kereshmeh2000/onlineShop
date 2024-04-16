import React from "react";
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx';
import TopBtn from '../TopBtn/TopBtn.jsx';
import './blog.css';
import { NavLink } from "react-router-dom";
// images
import blog from '../images/blog.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';

export default function Blog(){
    return(
        <>
        <TopBtn />
        <Header />
        

        <section className="bg img-fluid">
        <h2 className="text-center header-title">Blog</h2>
        </section>

    <section>
        <div className="container margin">
            <div className="row">
                <div className="col-12 col-md-4  mt-4 mt-md-0">
                    <div className="card">
                        <div className="card-header">
                            <img className="card-img-top img-fluid" src={blog} />
                            <span>Julay 9</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Test article</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <NavLink to="/article" className="btn btn-primary">Read more</NavLink>
                        </div>
                      </div>
                </div>
                <div className="col-12 col-md-4  mt-4 mt-md-0">
                    <div className="card">
                        <div className="card-header">
                            <img className="card-img-top img-fluid" src={blog2} />
                            <span>Julay 10</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Test article</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <NavLink to="/article" className="btn btn-primary">Read more</NavLink>
                        </div>
                      </div>
                </div>
                <div className="col-12 col-md-4  mt-4 mt-md-0">
                    <div className="card" >
                        <div className="card-header">
                            <img className="card-img-top img-fluid" src={blog3} />
                            <span>Julay 11</span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Test article</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <NavLink to="/article" className="btn btn-primary">Read more</NavLink>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </section>

    <section>
       <div className="container mt-5 d-flex justify-content-around">
                
              <div class="pagination align-items-center">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
              </div>

              
       </div>
    </section>
        

        <Footer />
        </>
    )
}