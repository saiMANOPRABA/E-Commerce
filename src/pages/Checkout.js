import React from 'react';
import Meta from '../components/Meta';
import {Link} from 'react-router-dom';
import {AiOutlineArrowLeft} from "react-icons/ai";
import watch from '../images/watch.jpg'
import Container from '../components/Container';

const Checkout = () => {
  return <>
  <Meta title={"Checkout"}/>
  <Container class1="Checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className='website-name'>AmazeCart</h3>
                    <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/cart" className='text-dark'>Cart</Link></li> 
    <li className="breadcrumb-item active" aria-current="page"><Link to=""  className='text-dark'>Information</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to=""  className='text-dark'>Shipping</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to=""  className='text-dark'>Payments</Link></li>
  </ol>
                    </nav>
                    <h4 className='title'>Contact Information</h4>
                    <p className="user-details">
                        praba@gmail.com
                    </p>

                    <h3>Sipping Address</h3>
                    <form action='' className='d-flex flex-wrap gap-15 justify-content-between'>
                        <div className='w-100'>
                            <select name='' className='form-control form-select' id='' >
                                <option value="address"> Select Country</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='First Name'/>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='Last Name' />
                        </div>
                        <div className='w-100'>
                            <input type="text" className="form-control" placeholder='Address' />
                        </div>
                        <div className='w-100'>
                            <input type="text" className="form-control" placeholder='Apartment,suite,etc(optional)'/>
                        </div>
                        <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='City'/>
                        </div>
                        <div className='flex-grow-1'>
                        <select name='address' className='form-control form-select' id=''>
                            <option value="address">Select State</option>
                        </select>
                        </div>
                        <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='Zip Code' />
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/cart" className='text-dark'> <AiOutlineArrowLeft/> Return to Cart</Link>
                                <Link to="/cart" className='button'>Continue to Shipping</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-5">
                <div className='border-bottom pt-4 pb-3'>
                 <div className="d-flex gap-10 align-items-center">
                 <div className='w-75 d-flex gap-10' >
                <div className='w-25 position-relative'>
                <span style={{top:"-10px", right:"0px"}} className="badge bg-primary text-white rounded-circle position-absolute">1</span>
                <img src={watch} className="img-fluid" alt="product"/>
                </div>
                <div>
                    <h5 className="title">Smart Watch</h5>
                    <p>S / #BSCEDE</p>
                </div>
                 </div>
                 <div className='flex-grow total-price'><h5>₹499</h5></div>

                </div>
                 </div>
                <div className='border-bottom pt-4'>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Subtotal</p>
                    <p className='total-price'> ₹499</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Shipping</p>
                    <p className='total-price'> ₹20</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className='total'>Total</h4>
                    <h5 className='total-price'>₹519</h5>
                </div>
            </div>
        </div>
  </Container>
  
  </>
}

export default Checkout