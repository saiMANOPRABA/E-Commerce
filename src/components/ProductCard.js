import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link,useLocation} from 'react-router-dom';
import productcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return <>
  <div className={`${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
    <Link to="/product:id" className="product-card position-relative">
        <div className="whishlist-icon position-absolute">
            <button className='border-0 bg-transparen'><img src={wish} alt="whish" /></button>
        </div>
        <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch-1.jpeg" className="img-fluid" alt="product" />
        </div>
        <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className='product-title'>Smart watches 10 pack multi colored for students</h5>
            <ReactStars value={3} edit={false}
    count={5}
    size={24}
    activeColor="#ffd700"
  />
  <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
  Make style statements and redefine fashion with the impressive Fit Buzz smartwatch <br/>that is bombarded with  amazing features. This watch incorporates Bluetooth calling that <br/> allows you to make calls and answer calls in a siri.
  </p>
            <p className="price">₹1000</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-10">
            <button className='border-0 bg-transparen'><img src={productcompare} alt="cart" /></button>
            <button className='border-0 bg-transparen'><img src="images/view.svg" alt="cart" /></button>
            <button className='border-0 bg-transparen'><img src="images/add-cart.svg" alt="cart" /></button>
          </div>
        </div>
    </Link>
  </div>
  </>
}

export default ProductCard