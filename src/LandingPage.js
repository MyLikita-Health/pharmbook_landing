/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Footer from "./Footer";
import { Col, Modal, Row } from "reactstrap";
import { CiSettings } from "react-icons/ci";
import { TbLockAccess } from "react-icons/tb";
import { SlSupport } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import NavbarComponent from "./Navbar";

export default function LandingPage() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <h3 className="text-white" style={{ cursor: "pointer" }}>
        {" "}
        PharmBook{" "}
      </h3>
      {/* <img
            src={require("./Images/4.png")}
            alt="logo"
            width={350}
            height={300}
            style={{ marginTop: -130 }}
          /> */}
      <div style={{ marginLeft: "auto" }}>
        {/* <a href="" className="href ">
          About us
        </a>
        <a href="" className="href" style={{ marginRight: "50px" }}>
          Contact Us
        </a> */}
      </div>
      <NavbarComponent expand={"md"} dark color="dark" />

      <main>
        <div className="First_body">
          <Row>
            <Col md={5}>
              {/* <img src={require('./IMG-20221030-WA0006.jpg')} alt='Logo' style={{ width: 200, marginTop: '28%' }}/> */}
              <h1 className="text-white title">PharmBook</h1>
              <p className="Discribtion">
                Is a system manage the
                inventories and track Phamacy records
              </p>
              <button className="register" onClick={toggle}>
                SignUp
              </button>
              <Modal
                isOpen={modal}
                toggle={toggle}
                style={{ backgroundColor: "transparent", marginTop: 200 }}
              >
                <Col md={5}>
                  <div className="signUp_col">
                    <p className="h3"> SignUp</p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Email Address"
                    />
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                    />
                    <input
                      className="input"
                      type="password"
                      placeholder="Comfirm Password"
                    />
                    <button className="Submit"> Submit </button>
                  </div>
                </Col>
              </Modal>
            </Col>
          </Row>
        </div>
        <div style={{ height: "550px" }} className="our_service">
          <Row className="m-0 p-0">
            <Col md={1}></Col>
            <Col md={5}>
              <center>
                <div style={{ marginTop: "30%" }}>
                  <h1>Our Services</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum rem soluta sit eius necessitatibus voluptate excepturi
                    beatae ad eveniet sapiente impedit quae modi quo provident
                    odit molestias! Rem reprehenderit assumenda
                  </p>
                </div>
              </center>
            </Col>
            <Col md={5}>
              <img
                src={require("./Images/6308.jpg")}
                alt="Our Services"
                width={780}
                className="imager"
              />
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
        <div className="Why_us">
          <Row className="m-0 p-0">
            <Col md={1}></Col>
            <Col md={10}>
              <center>
                <div style={{ marginTop: "4%" }}>
                  <h5
                    className="text-white"
                    style={{ fontSize: "15px", color: "#cccccc" }}
                  >
                    Why Choose Us
                  </h5>
                  <h1 className="text-white ">
                    {" "}
                    Easy Management for Your Businesses{" "}
                  </h1>
                </div>
                <Row className="m-0 p-0">
                  <Col md={1}></Col>
                  <Col md={4}>
                    <div className="detail">
                      <span>
                        <CiSettings
                          className="circle"
                          style={{ fontSize: 30, marginTop: 20 }}
                        />
                      </span>

                      <h4 className="mt-3 details">Easy Management</h4>

                      <p className="more_info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum rem soluta sit eius necessitatibus voluptate
                        excepturi beatae ad eveniet sapiente impedit quae modi
                        quo provident odit molestias! Rem reprehenderit
                        assumenda
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="detail">
                      <span>
                        <TbLockAccess
                          className="circle"
                          style={{ fontSize: 30, marginTop: 20 }}
                        />
                      </span>

                      <h4 className="mt-3 details">Protect Your Data</h4>

                      <p className="more_info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum rem soluta sit eius necessitatibus voluptate
                        excepturi beatae ad eveniet sapiente impedit quae modi
                        quo provident odit molestias! Rem reprehenderit
                        assumenda
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="detail">
                      <span>
                        <SlSupport
                          className="circle"
                          style={{ fontSize: 30, marginTop: 20 }}
                        />
                      </span>

                      <h4 className="mt-3 details">24/7 Help Support</h4>

                      <p className="more_info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum rem soluta sit eius necessitatibus voluptate
                        excepturi beatae ad eveniet sapiente impedit quae modi
                        quo provident odit molestias! Rem reprehenderit
                        assumenda
                      </p>
                    </div>
                  </Col>
                </Row>
          
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
        <div style={{ height: "550px", marginTop: "10%" }} className="About_us">
          <Row className="m-0 p-0">
            <Col md={1}></Col>
            <Col md={5}>
              <img
                src={require("./Images/9813.jpg")}
                alt="Our Services"
                width={750}
                className="imager"
                style={{}}
              />
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
         
                <div style={{ marginTop: "40%", width: "100%" }}>
                  <h1>About Us</h1>
                  <p>
                    We’re all about great retail and empowering businesses to
                    grow with our omnichannel solutions. Most importantly, we
                    know that when users are happy with their experience with
                    your brand, we’ve done our job correctly. We’re constantly
                    innovating and iterating to make sure the solutions and
                    services we deliver exceed your expectations.
                  </p>
                </div>
             
            </Col>
            {/* <Col md={1}></Col> */}
          </Row>
        </div>
        <div
          style={{ marginTop: "10%", backgroundColor: "#f2f2f2" }}
          className="testimonial"
        >
          <Row className="m-0 p-0">
            <Col md={1}></Col>
            <Col md={10}>
            
                <div>
                  <h4 style={{ fontSize: "15px", marginTop: 20 }}>
                    TESTIMONIAL
                  </h4>
                  <h1 className=""> Happy Costomer </h1>
                  <p>comment from does happyer costomer who use our system</p>
                </div>
                <Row className="m-0 p-0">
                  <Col md={1} style={{ marginRight: 100 }}></Col>
                  <Col md={4}>
                    <div className="qoutes">
                   
                        <p className="qoutation_mark"> " </p>
                 
                      <span
                        style={{
                          fontSize: 80,
                          border: "1px solid gray",
                          borderRadius: "50% ",
                        }}
                      >
                        <FaUser />
                      </span>
                      <h5>Ahmad Kabir</h5>
                      <p>Hanan Pharmacetical NIG LTD</p>
                      <p>
                        We implemented PharmBook to address a total lack of
                        inventory information. As a result, we gained inventory
                        visibility that allows us to educate customers on
                        product quality, view sales every day at each store in
                        real-time.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="qoutes">
               
                        <p className="qoutation_mark"> " </p>
                  
                      <span
                        style={{
                          fontSize: 80,
                          border: "1px solid gray",
                          borderRadius: "50% ",
                        }}
                      >
                        <FaUser />
                      </span>
                      <h5>Ahmad Kabir</h5>
                      <p>Hanan Pharmacetical NIG LTD</p>
                      <p>
                        We needed a system that was flexible, that would allow
                        us to grow the business as well. With PharmBook we’ve
                        put in various elements, like a back office system,
                        reporting & analytics system. The solution has given us
                        some really good dashboards giving real time insight to
                        the retail manager. It has given us the opportunity to
                        use self-checkout to help customers.
                      </p>
                    </div>
                  </Col>
                  {/* </div> */}
                </Row>
        
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
        <div>
          <div className="container">
            <div className="row vh-100">
              <center>
                <h1 style={{ marginBottom: -400, marginTop: 50 }}>Our Team</h1>
              </center>

              <div className="col-sm-4 col-lg-3  ">
                <div className="box shadow-lg p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={require("./Images/Ahmad.PNG")}
                      alt="..."
                    />
                  </div>
                  <div className="box-desc">
                    <h5>Ahmad Kabir</h5>
                    <p>CEO</p>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3 my-auto">
                <div className="box shadow-lg p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={require("./Images/Screenshot_2022.11.11_17.10.10.110~2.png")}
                      alt="..."
                    />
                  </div>
                  <div className="box-desc">
                    <h5>Zainab Cisse</h5>
                    <p>Marketting Manager</p>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3 my-auto">
                <div className="box shadow-lg p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={require("./Images/20221111_165457.jpg")}
                      alt="..."
                    />
                  </div>
                  <div className="box-desc">
                    <h5>Ishaq Ibrahim</h5>
                    <p>CTO</p>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3 my-auto">
                <div className="box shadow-lg p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                      alt="..."
                    />
                  </div>
                  <div className="box-desc">
                    <h5>Abdurrahman</h5>
                    <p>Developer</p>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Row className="m-0 p-0">
              <Col md={1} style={{ marginRight: 100 }}></Col>
              {/* <Col md={4}>
                <div className="col-sm-6 col-lg-3 my-auto">
                  <div className="box shadow-lg p-4">
                    <div className="image-wrapper mb-3">
                      <img
                        className="img-fluid"
                        src={require("./Images/Screenshot_2022.11.11_17.10.10.110~2.png")}
                        alt="..."
                      />
                    </div>
                    <div className="box-desc">
                      <h5>Zainab Cisse</h5>
                      <p>Marketting Manager</p>
                    </div>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col> */}

              <Col md={4}>
                {/* <div className="qoutes">
                  <center>
                    <p className="qoutation_mark"> " </p>
                  </center>
                  <span
                    style={{
                      fontSize: 80,
                      border: "1px solid gray",
                      borderRadius: "50% ",
                    }}
                  >
                    <FaUser />
                  </span>
                  <h5>Ahmad Kabir</h5>
                  <p>Hanan Pharmacetical NIG LTD</p>
                  <p>
                    We needed a system that was flexible, that would allow us to
                    grow the business as well. With PharmBook we’ve put in
                    various elements, like a back office system, reporting &
                    analytics system. The solution has given us some really good
                    dashboards giving real time insight to the retail manager.
                    It has given us the opportunity to use self-checkout to help
                    customers.
                  </p>
                </div> */}
              </Col>
              {/* </div> */}
            </Row>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
