/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Row } from 'reactstrap'

export default function LandingPage() {
  return (
    <div>
        <header className='bg-dark p-3'>
            <nav className='header_nav text-white'>
                <h3 className='text-white'> PharmBook </h3>
                <a href=''>Home</a>
                <a href=''>Contact Us</a>
            </nav>
        </header>
        <main>
            <div className='First_body'>
                <Row className='p-0 m-0'>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <img src={require('./IMG-20221030-WA0006.jpg')} alt='Logo' style={{ width: 200, marginTop: '28%' }}/>
                        <h1 className='text-white title'>PharmBook</h1>
                        <p className='Discribtion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad 
                        eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda</p>
                    </Col>
                    <Col md={5}>
                        <div className='signUp_col'>
                            <p className='h3'> SignUp</p>
                            <input className='input' type='text' placeholder='Email Address'/>
                            <input className='input' type='password' placeholder='Password'/>
                            <input className='input' type='password' placeholder='Comfirm Password'/>
                            <button className='Submit'> Submit </button>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
            <div style={{height: '550px'}}>
                <Row className='m-0 p-0'>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <center>
                            <div style={{marginTop: '30%'}}>
                                <h1>Our Services</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                   Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad 
                                   eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda
                                </p>
                            </div>
                        </center>
                    </Col>
                    <Col md={5}>
                        <img src={require('./6308.jpg')} alt='Our Services' width={780} />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
            <div className='Why_us'>
                <Row className='m-0 p-0'>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <center>
                            <div style={{marginTop: '4%'}}>
                                <h5 className='text-white' style={{fontSize: '15px',color: '#cccccc'}}>Why Choose Us</h5>
                                <h1 className='text-white'> Easy Management for Your Businesses </h1>
                                <p style={{color: '#f2f2f2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                   Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad 
                                   eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda
                                </p>
                            </div>
                            <div style={{display: "flex",flexDirection: "row"}}>
                                <div className='detail'>
                                    {/* ahmad */}
                                </div>
                                <div className='detail'>
                                    {/* ahmad */}
                                </div>
                                <div className='detail'>
                                    {/* ahmad */}
                                </div>
                            </div>
                        </center>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        </main>
    </div>
  )
}
