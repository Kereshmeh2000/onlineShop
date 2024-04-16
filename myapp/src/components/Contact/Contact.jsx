import React from "react";
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx'
import TopBtn from '../TopBtn/TopBtn.jsx'
import  './contact.css'
import envelope from '../images/envelope.png'
import * as Icon from 'react-bootstrap-icons';


export default function Contact(){
    return(
        <>
        <TopBtn />
        <Header />
        
        <section class="bg img-fluid">
        <h2 class="text-center header-title">Contact Us</h2>
      </section>
      <section class="container margin">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <img src={envelope} class="img-fluid" />
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <form> 
                <input class="form-item input-name" type="text" placeholder="Name" required />
                <input class="form-item input-phone" type="number" placeholder="Phone number" />
                <div class="form-check-inline my-3">
                    <input type="radio" name="radio" />
                    <label>Male</label>
                </div>
                <div class="form-check-inline my-3">
                    <input type="radio" name="radio" />
                    <label>Female</label>
                </div>
                <input type="file" class="input-file" />
                <textarea class="form-item mt-3" cols="70" rows="3" placeholder="Write your massage here"></textarea>
                <div class="mt-3">
                    <input type="submit" class="btn btn-primary" />
                    <input type="reset" class="btn btn-outline-dark" />
                </div>
            </form>
          </div>
        </div>
      </section>

      <section class="margin">
        <div class="container mt-5">
          <div class="row contact-section">
              <div class="col-11 col-md-4 p-4 contact-box text-center">
                <Icon.GeoAltFill class="text-primary display-6" />
                <h4 class="my-4">Adress</h4>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div class="col-11 col-md-4 p-4 contact-box text-center">
                <Icon.Telephone class="text-primary display-6" />
                <h4 class="my-4">Phone</h4>
                <p>09360105092</p>
              </div>
              <div class="col-11 col-md-4 p-4 contact-box text-center">
                <Icon.Envelope class="text-primary display-6" />
                <h4 class="my-4">Email</h4>
                <p>example@gmail.com</p>
              </div>
          </div>
        </div>
      </section>
        <Footer />
        </>
    )
}