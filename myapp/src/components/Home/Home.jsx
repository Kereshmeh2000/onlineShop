import React from "react";
import './home.css'
import * as Icon from 'react-bootstrap-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx'
import TopBtn from '../TopBtn/TopBtn.jsx'


//images
import imge from '../images/img_1.png';
import g2 from '../images/gallery (2).jpg';
import g3 from '../images/gallery (3).jpg';
import g1 from '../images/gallery.jpg';
import imge2 from '../images/img_5.png'

export default function Home (){
    return(
        <>

        <TopBtn />
        <Header />

    <section className="">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-5 mt-md-0">
            <h2>Lorem Ipsum</h2>
            <h6 className="text-primary mb-4">Lorem Ipsum</h6>
            <p className="text-justify">
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
              bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
              zethaak met letters nam en ze door elkaar husselde om een
              font-catalogus te maken. Het heeft niet alleen vijf eeuwen
              overleefd maar is ook, vrijwel onveranderd.
            </p>
            <button type="button" className="btn btn-primary">Lorem</button>
            <button type="button" className="btn btn-outline-dark mx-2">
              Lorem
            </button>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <img src={imge} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>

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
    
     
    
    <section className="bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Icon.Stack className="iconCss" />
            <h4 className="my-3">Lorem Ipsum</h4>
            <p>
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen.
            </p>
            <button type="button" className="btn btn-outline-dark mb-4 mb-md-0">
              Lorem Ipsum
            </button>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <Icon.GraphUp className="iconCss" />
                    <h4 className="my-3 card-title">Lorem Ipsum</h4>
                    <p className="card-text text-muted">
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij-
                      en zetterijwezen.
                    </p>
                  </div>
                </div>
                <div className="card text-center shadow mt-4">
                  <div className="card-body">
                    <Icon.Grid className="iconCss" />
                    <h4 className="my-3 card-title">Lorem Ipsum</h4>
                    <p className="card-text text-muted">
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij-
                      en zetterijwezen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <Icon.BarChartLineFill className="iconCss" />
                    <h4 className="my-3 card-title">Lorem Ipsum</h4>
                    <p className="card-text text-muted">
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij-
                      en zetterijwezen.
                    </p>
                  </div>
                </div>
                <div className="card text-center shadow mt-4">
                  <div className="card-body">
                    <Icon.MenuButtonFill className="iconCss" />
                    <h4 className="my-3 card-title">Lorem Ipsum</h4>
                    <p className="card-text text-muted">
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij-
                      en zetterijwezen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="wave1">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="svg1"
      >
        <path
          d="M-12.69,8.41 C149.99,150.00 271.49,-49.98 504.22,24.19 L500.00,0.00 L0.00,0.00 Z"
          className="path1"
        ></path>
      </svg>
    </div>

    <section>
      <div className="container my-5"> 
          <h2 className="text-center my-5">Why Us?</h2>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-12 col-md-6">
            <h4 className="my-3">Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae adipisci perferendis unde facilis sed enim fuga provident commodi ad tenetur, sit, illum veritatis mollitia quisquam labore natus delectus ipsa earum a obcaecati aliquam. Voluptate corrupti odit aspernatur similique sequi numquam qui. Molestias illum officia, qui nihil aliquid quisquam non.
            </p>
          </div>
          <div className="col-12 col-md-6 swiper-personalization">
                <Swiper  effect={'cards'}
                         grabCursor={true}
                         modules={[EffectCards]}
                         className="mySwiper">
                  <SwiperSlide className="child1">
                  <h3>lorem</h3>
                  <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente enim necessitatibus saepe odio ut asperiores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente.
                  </p>
                  </SwiperSlide>
                  <SwiperSlide className="child2">
                  <h3>lorem</h3>
                  <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente enim necessitatibus saepe odio ut asperiores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente.
                  </p>
                  </SwiperSlide>
                  <SwiperSlide className="child3">
                  <h3>lorem</h3>
                  <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente enim necessitatibus saepe odio ut asperiores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente.
                  </p>
                  </SwiperSlide>
                  <SwiperSlide className="child4">
                  <h3>lorem</h3>
                  <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente enim necessitatibus saepe odio ut asperiores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente.
                  </p>
                  </SwiperSlide>
                  <SwiperSlide className="child5">
                  <h3>lorem</h3>
                  <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente enim necessitatibus saepe odio ut asperiores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente.
                  </p>
                  </SwiperSlide>
                  <SwiperSlide className="child6">
                  <h3>lorem</h3>
                  <p className="px-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente enim necessitatibus saepe odio ut asperiores.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sit rem delectus iure sapiente.
                  </p>
                  </SwiperSlide>
                </Swiper>
          </div>
        </div>
      </div>
    </section>

    <section className="margin">
      <div className="container">
        <div className="row text-center">
          <h2 className="my-3">Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
            zetterijwezen.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="text-center card shadow">
              <Icon.MenuButtonWideFill className="iconCss my-4 mx-auto" />
              <div className="card-body">
                <h5 className="card-title">Preliminary</h5>
                <h5 className="card-title my-4">50 $</h5>
                <h5 className="card-title text-muted">2 users per month</h5>
                <h5 className="card-title text-muted">Space 30GB</h5>
                <h5 className="card-title text-muted">Support</h5>
                <h5 className="card-title text-muted">Full access</h5>
                <a href="#" className="btn btn-primary my-4">Lorem Ipsum</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mt-md-0">
            <div className="text-center text-light card shadow my-card py-4">
            <Icon.MenuButtonWideFill className="iconCss my-4 mx-auto" />
              <div className="card-body my-card-body">
                <h5 className="card-title">Preliminary</h5>
                <h5 className="card-title my-4">50 $</h5>
                <h5 className="card-title">2 users per month</h5>
                <h5 className="card-title">Space 30GB</h5>
                <h5 className="card-title">Support</h5>
                <h5 className="card-title">Full access</h5>
                <button type="button" className="btn btn-light my-4">
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mt-md-0">
            <div className="text-center card shadow">
            <Icon.MenuButtonWideFill className="iconCss my-4 mx-auto" />
              <div className="card-body">
                <h5 className="card-title">Preliminary</h5>
                <h5 className="card-title my-4">50 $</h5>
                <h5 className="card-title text-muted">2 users per month</h5>
                <h5 className="card-title text-muted">Space 30GB</h5>
                <h5 className="card-title text-muted">Support</h5>
                <h5 className="card-title text-muted">Full access</h5>
                <a href="#" className="btn btn-primary my-4">Lorem Ipsum</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="margin"></div>
    <div className="wave1">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="svg1"
      >
        <path
          d="M-1.41,117.94 C149.99,150.00 348.47,-8.36 504.22,127.80 L500.00,150.00 L0.00,150.00 Z"
          className="path2"
        ></path>
      </svg>
    </div>

    <section className="gallery-section  py-2">
        <div className="container">
          <div className="row text-center text-light">
            <h2 className="my-3">Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen.
            </p>
        
        
              <Swiper className="swiper sample-slider">
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide mx-2"><img src={g1} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide mx-2"><img src={g2} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide mx-2"><img src={g3} /></SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
          </div>
        </div>
    </section>

    <div className="wave1">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="svg1"
      >
        <path
          d="M-12.69,8.41 C149.99,150.00 271.49,-49.98 504.22,24.19 L500.00,0.00 L0.00,0.00 Z"
          className="path2"
        ></path>
      </svg>
    </div>

    <section>
      <div className="container">
        <div>
          <div className="row text-center">
            <h2 className="my-3">Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={imge2} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label className="my-2" for="exampleFormControlInput1"
                    >Email address</label
                  >
                  <input
                    type="email"
                    className="form-control mb-4"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="form-group">
                  <label className="my-2" for="exampleFormControlTextarea1"
                    >Example textarea</label
                  >
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button className="btn btn-primary px-4 mt-3" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
        </>
    )
}