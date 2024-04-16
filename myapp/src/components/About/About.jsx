import React from "react";
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx'
import TopBtn from '../TopBtn/TopBtn.jsx'
import './about.css';
// images
import imge2 from '../images/img_5.png'
import aboutGallery from '../images/about-gallery.jpg'
import aboutGallery2 from '../images/about-gallery (2).jpg'
import aboutGallery3 from '../images/about-gallery (3).jpg'
import aboutGallery4 from '../images/about-gallery (4).jpg'
//js functions 
import {openPopup, closePopup} from './about.js'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


export default function About(){
    return(
        <>
        <TopBtn />
        <Header />
       

        <section class="bg img-fluid">
      <h2 class="text-center header-title">About Us</h2>
    </section>
    <section class="container ">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <img class="img-fluid" src={imge2} />
        </div>
        <div class="col-12 col-md-6">
          <h2>About Us</h2>
          <p class="text-justify">
            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
            zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
            bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
            zethaak met letters nam en ze door elkaar husselde om een
            font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd
            maar is ook, vrijwel onveranderd.
          </p>
        </div>
      </div>
    </section>

    <section class="desktop-gallery margin2">
      <div class="container">
        <h2 class="text-center">Gallery</h2>
        <div class="row mt-5 img-gallery">
  <div class="col-12 col-md-3">
    <img src={aboutGallery} class="img-fluid about-gallery" onClick={() => openPopup(aboutGallery)}/>
  </div>
  <div class="col-12 col-md-3">
    <img src={aboutGallery2} class="img-fluid about-gallery" onClick={() => openPopup(aboutGallery2)}/>
  </div>
  <div class="col-12 col-md-3">
    <img src={aboutGallery3} class="img-fluid about-gallery" onClick={() => openPopup(aboutGallery3)}/>
  </div>
  <div class="col-12 col-md-3">
    <img src={aboutGallery4} class="img-fluid about-gallery" onClick={() => openPopup(aboutGallery4)}/>
  </div>
</div>

        <div class="popup" onClick={closePopup}>
          <span>&times;</span>
          <img src="" class="img-fluid popup-image" />
        </div>
      </div>
    </section>
    {/* <section class="responsive-gallery">
      <swiper-container class="mySwiper about-gallery-section" navigation="true">
        <swiper-slide>
          <img src="./images/about-gallery (2).jpg" class="img-fluid about-gallery" onClick={openPopup(this)}/>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/about-gallery (3).jpg" class="img-fluid about-gallery" onClick={openPopup(this)}/>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/about-gallery (4).jpg" class="img-fluid about-gallery" onClick={openPopup(this)}/>
        </swiper-slide>
        <swiper-slide>
          <img src="./images/about-gallery.jpg" class="img-fluid about-gallery" onClick={openPopup(this)}/>
        </swiper-slide>
      </swiper-container>
    </section> */}

    <section class="margin">
      <h2 class="text-center">Customer opinion</h2>
      <div class="container">
        <div class="customers-opinion mt-5">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-swiper">
          <SwiperSlide className="customers"> 
              <h3>Daniel</h3>
              <p class="px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, facere?</p>
          </SwiperSlide>
          <SwiperSlide className="customers">
              <h3>Martin</h3>
              <p class="px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, facere? Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit</p>
          </SwiperSlide>
        </Swiper>
          
        </div>
    </div>
    </section>
       

        <Footer />
        </>
    )
}