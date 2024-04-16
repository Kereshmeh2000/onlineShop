import React from "react";
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx';
import TopBtn from '../TopBtn/TopBtn.jsx';
import './article.css'
import { NavLink } from "react-router-dom";
//images
import blog from '../images/blog.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';
import about from "../images/about-gallery (2).jpg"

export default function Article (){
    return  <>
    <TopBtn />
    <Header />
    <section class="bg img-fluid">
    <h2 class="text-center header-title">Article</h2>
  </section>

  <section class="article-container">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="article-column">
            <section class="breadcrumb-section">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item breadcrumb-home">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li class="breadcrumb-item" aria-current="page">
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                      <li class="breadcrumb-item" aria-current="page">
                      <NavLink to="/article">Article</NavLink>
                      </li>
                    </ol>
                  </nav>
            </section>
            <h1 class="my-4">TEST ARTICLE</h1>
            <p class="jusify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam rem vitae, nisi modi perspiciatis harum accusamus nesciunt. Numquam aliquam magnam doloremque temporibus earum quam, blanditiis quibusdam unde minima. Saepe alias necessitatibus commodi voluptatibus, nulla maxime quos numquam dicta, nesciunt odio voluptas labore! Voluptates consequuntur quam rem cumque assumenda voluptatem, soluta hic modi possimus deleniti vel itaque odit est id laboriosam fuga nobis qui repellat. Odit, tenetur, obcaecati eaque alias deleniti dicta esse quisquam accusamus laborum praesentium tempore, reprehenderit saepe recusandae doloremque odio ducimus fugiat temporibus. Temporibus sit culpa velit libero, nam cupiditate sequi esse officia quam nisi doloremque impedit?</p>
            <p class="jusify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis nisi reprehenderit beatae? Labore reiciendis corporis vitae aperiam harum quidem. Praesentium voluptatum ex eaque aliquam quos nam iure eum expedita aut autem laboriosam mollitia, incidunt voluptatibus quis ut explicabo eligendi unde modi architecto sunt adipisci. Voluptatum, dolorum? Distinctio deleniti animi dolorum asperiores obcaecati impedit, possimus nam placeat eos, alias ad in quos architecto velit, perspiciatis unde. Voluptatibus laboriosam sunt ratione temporibus eaque molestias, sit nulla iste soluta enim cumque? Quo neque, delectus vero amet corrupti voluptatem mollitia, excepturi ducimus aliquam officia error repellendus, assumenda nihil tempora soluta consequatur dignissimos molestias?</p>
            <img src={blog} class="img-fluid w-100" />
            <p class="jusify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis nisi reprehenderit beatae? Labore reiciendis corporis vitae aperiam harum quidem. Praesentium voluptatum ex eaque aliquam quos nam iure eum expedita aut autem laboriosam mollitia, incidunt voluptatibus quis ut explicabo eligendi unde modi architecto sunt adipisci. Voluptatum, dolorum? Distinctio deleniti animi dolorum asperiores obcaecati impedit, possimus nam placeat eos, alias ad in quos architecto velit, perspiciatis unde. Voluptatibus laboriosam sunt ratione temporibus eaque molestias, sit nulla iste soluta enim cumque? Quo neque, delectus vero amet corrupti voluptatem mollitia, excepturi ducimus aliquam officia error repellendus, assumenda nihil tempora soluta consequatur dignissimos molestias?</p>
            <p class="jusify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis nisi reprehenderit beatae? Labore reiciendis corporis vitae aperiam harum quidem. Praesentium voluptatum ex eaque aliquam quos nam iure eum expedita aut autem laboriosam mollitia, incidunt voluptatibus quis ut explicabo eligendi unde modi architecto sunt adipisci. Voluptatum, dolorum? Distinctio deleniti animi dolorum asperiores obcaecati impedit, possimus nam placeat eos, alias ad in quos architecto velit, perspiciatis unde. Voluptatibus laboriosam sunt ratione temporibus eaque molestias, sit nulla iste soluta enim cumque? Quo neque, delectus vero amet corrupti voluptatem mollitia, excepturi ducimus aliquam officia error repellendus, assumenda nihil tempora soluta consequatur dignissimos molestias?</p>
            <p class="jusify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis nisi reprehenderit beatae? Labore reiciendis corporis vitae aperiam harum quidem. Praesentium voluptatum ex eaque aliquam quos nam iure eum expedita aut autem laboriosam mollitia, incidunt voluptatibus quis ut explicabo eligendi unde modi architecto sunt adipisci. Voluptatum, dolorum? Distinctio deleniti animi dolorum asperiores obcaecati impedit, possimus nam placeat eos, alias ad in quos architecto velit, perspiciatis unde. Voluptatibus laboriosam sunt ratione temporibus eaque molestias, sit nulla iste soluta enim cumque? Quo neque, delectus vero amet corrupti voluptatem mollitia, excepturi ducimus aliquam officia error repellendus, assumenda nihil tempora soluta consequatur dignissimos molestias?</p>
            <p class="jusify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam blanditiis nisi reprehenderit beatae? Labore reiciendis corporis vitae aperiam harum quidem. Praesentium voluptatum ex eaque aliquam quos nam iure eum expedita aut autem laboriosam mollitia, incidunt voluptatibus quis ut explicabo eligendi unde modi architecto sunt adipisci. Voluptatum, dolorum? Distinctio deleniti animi dolorum asperiores obcaecati impedit, possimus nam placeat eos, alias ad in quos architecto velit, perspiciatis unde. Voluptatibus laboriosam sunt ratione temporibus eaque molestias, sit nulla iste soluta enim cumque? Quo neque, delectus vero amet corrupti voluptatem mollitia, excepturi ducimus aliquam officia error repellendus, assumenda nihil tempora soluta consequatur dignissimos molestias?</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="article-column article-column-righ">
            <h4>Most Viewd posts</h4>
            <hr />
            <NavLink to="/article" >
              <div class="row mt-3">
                <div class="col-md-5">
                  <img src={about} class="img-fluid article-sidebar-img" />
                </div>
                <div class="col-md-7">
                  <h5 class="article-sidebar-title">Test Article</h5>
                  <p class="article-sidebar">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/article">
              <div class="row mt-3">
                <div class="col-md-5">
                  <img src={blog} class="img-fluid article-sidebar-img" />
                </div>
                <div class="col-md-7">
                  <h5>Test Article 2</h5>
                  <p class="article-sidebar">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/article">
              <div class="row mt-3">
                <div class="col-md-5">
                  <img src={blog2} class="img-fluid article-sidebar-img" />
                </div>
                <div class="col-md-7">
                  <h5>Test Article 3</h5>
                  <p class="article-sidebar">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/article">
              <div class="row mt-3">
                <div class="col-md-5">
                  <img src={blog3} class="img-fluid article-sidebar-img" />
                </div>
                <div class="col-md-7">
                  <h5>Test Article 4</h5>
                  <p class="article-sidebar">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
    <Footer />
    </>
}