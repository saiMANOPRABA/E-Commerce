import React from 'react';
import {Link} from 'react-router-dom';
import {BsInstagram,BsTwitter,BsFacebook,BsYoutube} from "react-icons/bs";
const Footer = () => {
  return <>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex align-items-center">
            <img src="images/newsletter.png" alt="newsletter" />
            <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>            
          </div>
        </div>
        <div className="col-7">
        <div className="input-group ">
  <input
   type="text" className="form-control py-1" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">
  Subscribe
  </span>
  </div>
  </div>
  </div>
  </div>
  </footer>

  <footer className='py-4'>
  <div className="container-xxl">
    <div className="row">
      <div className="col-4">
        <h4 className='text-white mb-4'>Contact Us</h4>
        <div>
          <address className='text-white fs-6'>
          No: 85, Shanthi Nagar <br/>
          Near Airport<br/>
          Lawspet<br/>
          Pondicherry-605008
          </address>
          <a href="tel:+91 9876543210" className="mt-3 d-block mb-3 text-white">+91 9876543210</a>
          <a href="mailto:amazecart@gmail.com" className="mt-2 d-block mb-2 text-white">amazecart@gmail.com</a>
          <div className="social_icons">
            <a href="!#">
            <BsTwitter/>
            </a>
            <a href="!#">
            <BsFacebook/>
            </a>
            <a href="!#">
             <BsInstagram/>
             </a>
            <a href="!#">
            <BsYoutube/>
            </a>
          </div>
        </div>
      </div>
      <div className="col-3">
        <h4 className='text-white mb-4'>Information</h4>
        <div className='footer-links d-flex flex-column'>
        <Link className='text-white py-2 mb-1' to="/privacy-policy">Privacy Policy</Link>
          <Link className='text-white py-2 mb-1' to="/refund-policy">Refund Policy</Link>
          <Link className='text-white py-2 mb-1' to="shipping-policy">Shipping Policy</Link>
          <Link className='text-white py-2 mb-1' to="/terms-condition">Terms & Condition</Link>
          <Link className='text-white py-2 mb-1' to="/blogs">Blogs</Link>
        </div>
        </div>
      <div className="col-3">
        <h4 className='text-white mb-4'>Account</h4>
        <div className='footer-links d-flex flex-column'>
        <Link className='text-white py-2 mb-1' to="">Search</Link>
          <Link className='text-white py-2 mb-1' to="">About Us</Link>
          <Link className='text-white py-2 mb-1' to="">FAQ</Link>
          <Link className='text-white py-2 mb-1' to="">Contact</Link>
        </div>
      </div>
      <div className="col-2">
        <h4 className='text-white mb-4'>Quick Links</h4>
        <div className='footer-links d-flex flex-column'>
          <Link className='text-white py-2 mb-1' to="">Laptops</Link>
          <Link className='text-white py-2 mb-1' to="">Headphones</Link>
          <Link className='text-white py-2 mb-1' to="">Tablet</Link>
          <Link className='text-white py-2 mb-1' to="">Watch</Link>
        </div>
      </div>
    </div>
  </div>
  </footer>

  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 mb-0 text-white">
          <p className='text-center'>&copy;{new Date().getFullYear()} Powered By AmazeCart</p>
        </div>
      </div>
    </div>
  </footer>
  </>
}

export default Footer;