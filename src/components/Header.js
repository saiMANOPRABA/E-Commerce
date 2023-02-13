import React from 'react';
import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';

function Header() {
  return<>
  <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
        <div className="col-6">
          <p className="top text-white mb-0">Get Free Shipping and Return order above ₹500</p>
        </div>
        <div className="col-6">
          <p className="text-end text-white mb-0">Contact: <a href='tel:+91 9876543210'>+91 9876543210</a></p>
          </div> 
      </div>
    </div>
  </header>
  <header className="header-upper py-3">
 <div className="container-xxl">
  <div className="row align-items-center">
    <div className="col-2">
      <h2 className="text-white">
        AmazeCart
      </h2>
    </div>
    <div className="col-5">
    <div className="input-group ">
  <input
   type="text" className="form-control py-2" placeholder="Search Product...." aria-label="Search Product" aria-describedby="basic-addon2"/>
  <span className="input-group-text " id="basic-addon2">'
  <BsSearch className='fs-6'/>
  </span>
</div>
    </div>
    <div className="col-5">
      <div className="header-upper-links">
      <Link to="/compare" className='top-icons'>
       <img src="images/compare.svg" alt="compare"/>
       <p>Compare <br/>Product</p>
      </Link>
      <Link to="/wishlist" className='top-icons'>
      <img src="images/wishlist.svg" alt="wishlist"/>
       <p>Favourite <br/>Whishlist</p>
      </Link>
      <Link to="login" className='top-icons'>
      <img src="images/user.svg" alt="user"/>
       <p>Login <br/>My Account</p>
      </Link>
      <Link to="/cart" className="d-flex align-items-center gap-10">
      <img src="images/cart.svg" alt="cart"/>
      <div className='d-flex flex-column'>
       <span className='badge'> 0 </span>
       <p className='mb-0 '>₹: 0</p> 
      </div>
      </Link>
      </div>
    </div>
  </div>
 </div>
  </header>
  <header className="header-bottom py-3">

   <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <div className="menu-bottom d-flex align-items-center gap-30">
          <div>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="images/menu.svg" alt="icon" />
    <span className='drop-cont'> Shop  Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="">Action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
  </ul>
</div>
          </div>
          <div className="menu-links">
            <div className="d-flex align-items-center gap-15">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/store">Our Store</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </header>


  </>
}

export default Header