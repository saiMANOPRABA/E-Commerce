import React from 'react';
import watch from '../images/watch.jpg';
import {RiDeleteBin5Fill} from "react-icons/ri"
import {Link} from "react-router-dom"
import Container from '../components/Container';
import Meta from '../components/Meta';


const Cart = () => {
  return <>
  <Meta title={"Cart"}/>
  <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="cart-header d-flex justify-content-between py-5 align-items-center">
                 <h4 className='cart-col-1'>PRODUCT</h4>
                 <h4 className='cart-col-2'>PRICE</h4>
                 <h4 className='cart-col-3'>QUANTITY</h4>
                 <h4 className='cart-col-4'>TOTAL</h4>
                </div>
                <div className="cart-data d-flex justify-content-between mb-2 gap-10 py-3 align-items-center">
                <div className='cart-col-1 d-flex align-items-center gap-15'>
                    <div className='w-25'>
                        <img className='img-fluid' src={watch} alt="product" />
                    </div>
                    <div>
                        <p> Smart Watch</p>
                        <p>Size: S M L XL </p>
                        <p>Color:</p>
                    </div>
                </div>
                <div className='cart-col-2'>
                    <h5 className='price'>₹499</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-10'>
                <div>
                    <input className='form-control' type="number"  min={1} max={10}/>

                </div>
                <div>
                    <RiDeleteBin5Fill className='text-danger'/>
                </div>

                </div>
                <div className='cart-col-4'>
                <h5 className='price'>₹499</h5>

                </div>
                </div>
            </div>
            <div className="col-12 py-2">
            <div className="d-flex justify-content-between">  
           <Link className='button d-flex align-items-center h-25' to="/home">Continue Shopping</Link>
            <div className='d-flex flex-column align-items-end'>
                <h4>Subtotal: ₹499</h4>
                <p>Taxes and shipping fees calculated at checkout </p>
                <Link className='button' to="/checkout">Checkout</Link>
            </div>
            </div>
            </div>
        </div>
  </Container>
  </>
}

export default Cart