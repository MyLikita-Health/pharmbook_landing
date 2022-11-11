import React from 'react'
import './footer.css'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
  return (
    <div className='footer-first-div'>

    <MDBFooter className='text-center text-lg-start' style={{paddingTop: 50, color: '#fff'}}>
      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <img src={require('./Images/4.png')} alt = 'logo' width={200} style={{marginLeft: -25,marginBottom:-40}} />
              {/* <p>PharmBook is here for your dream home. At affordable prices</p> */}
              <div className='' style={{ cursor: 'pointer', display: 'flex',marginTop: 20 }}>
         
                <Facebook />
                  
                <Youtube style={{marginLeft: 10}}/>
                  
                <Twitter style={{marginLeft: 10}}/>
                  
                <Instagram style={{marginLeft: 10}}/>
                  
                <Linkedin style={{marginLeft: 10}}/>
              </div>
            </MDBCol>
            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='href_link'>
                  zee
                </a>
              </p>
              <p>
                <a href='#!' className='href_link'>
                  cisse
                </a>
              </p>
              <p>
                <a href='#!' className='href_link'>
                  miss
                </a>
              </p>
              <p>
                <a href='#!' className='href_link'>
                  independent
                </a>
              </p>
            </MDBCol> */}

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='href_link'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='href_link'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='href_link'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='href_link'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{width: 400}}>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" />
                First Floor,African Alliance Building,Airport Road kano
              </p>
              <p>
                <MDBIcon icon="envelope"  />
                developer@pharmabooks.ng
              </p>
              <p>
                <MDBIcon icon="phone"  /> +2348141714172
              </p>
              <p>
                <MDBIcon icon="print"  /> +2348141714172
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright : 
        <a className='href_link fw-bold' href='https://mdbootstrap.com/'> PharmBook
        </a>
      </div>
    </MDBFooter>
     </div>
//     <div className='footer-first-div'>
//         <div>
//             {footerDataList1.map((item, id) => (
//                 <div className='footer-second-div' key={id}>
//                     <ul className='footer-first-ul'>
//                         <p className='footer-para'> {item.para} </p>
//                         <li className='footer-first-li'> {item.listItem} </li>
//                     </ul>
//                 </div>
//             ))}
//         </div>
//         <div>
//             {footerDataList2.map((item, id) => (
//                 <div className='footer-third-div' key={id}>
//                     <ul className='footer-first-ul'>
//                         <p className='footer-para'> {item.para} </p>
//                         <li className='footer-first-li'> {item.listItem} </li>
//                     </ul>
//                 </div>
//             ))}
//         </div>
//         <div>
//             {footerDataList3.map((item, id) => (
//                 <div className='footer-third-div' key={id}>
//                     <ul className='footer-first-ul'>
//                         <p className='footer-para'> {item.para} </p>
//                         <li className='footer-first-li'> {item.listItem} </li>
//                     </ul>
//                 </div>
//             ))}
//         </div>
//         <div>
//             {footerDataList4.map((item, id) => (
//                 <div className='footer-fourth-div'>
//                     <p className='footer-para'> {item.para} </p>
//                     <p className='footer-para1'> {item.tollFree} </p>
//                     <p className='footer-para2'> {item.dateTime} </p>
//                     <p className='footer-para3'> {item.mail} </p>
//                     <p className='para4'> {item.contactUs} </p>
                    
//                 </div>
//             ))}
//         </div>
//     </div>
  )
}
