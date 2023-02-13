import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { FaHome,FaBusinessTime} from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import Container from '../components/Container';

function Contact() {
  return<>
  <Meta title={"Contact Us"}/>
  <BreadCrumb title="contact"/>
  <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31053.39259929835!2d79.98113985840287!3d13.370530948071423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d7ddd23f5222f%3A0xab91fd32cc89ed4f!2sThervoy%20Kandigai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1675698641262!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' title="my-frame" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
          <div>
            <h3 className="contact-title mb-4">
            Contact Us
            </h3>
            <form action="" className='form d-flex flex-column gap-15' value="readOnly">
              <div>
                <input className='form-control' type="" name="" value="" placeholder='Name'/>
              </div>
              <div>
                <input className='form-control' type="" name="" value="" placeholder='Email'/>
              </div><div>
                <input className='form-control' type="" name="" value="" placeholder='Mobile Number'/>
              </div><div>
                <textarea rows="4"name='' id='' cols="30" className='w-100 form-control' placeholder='comments'></textarea>
              </div>
              <div className='button border-0'>Submit</div>
            </form>
            </div>
          <div><h3 className="contact-title">
            Get in Touch with Us</h3>
            <div>
              <ul className='ps-0'>
                <li className='mb-4 mt-3'>
                  <FaHome className='fs-5'/>&nbsp; <span> No: 85, Shanthi Nagar (Near Airport), Lawspet, Pondicherry-8.</span>
                </li>
                <li className='mb-4'>
                  <BsTelephoneFill className='fs-5'/>&nbsp; <a href="tel:+91 9876543210">+91 9876543210</a> 
                </li>
                <li className='mb-4'>
                  <GoMail className='fs-5'/>&nbsp; <a href="mailto:amazecart@gmail.com">amazecart@gmail.com</a> 
                </li>
                <li className='mb-4 mt-3'>
                  <FaBusinessTime className='fs-5'/>&nbsp;<span> Monday-Friday <b>10AM - 8PM</b></span>
                </li>
              </ul> 
            </div>
            </div>
          </div>
        </div>
      </div>
  </Container>
  </>
}

export default Contact