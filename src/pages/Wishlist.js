import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Wishlist = () => {
  return<>
  <Meta title={"wislist"}/>
  <BreadCrumb title="Wishlist"/>
  <Container class1="wishlist-wrapper home-wrapper-2 py-5">
    <div className="row">
        <div className="col-3">
<div className="wishlist-card position-relative">
<img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>

    <div className="wishlist-card-image">
       <img src="images/watch.jpg"  className=" img-fluid w-100"alt="watch" />
    </div>
    <div className='py-2 px-3'>
    <h5 className="title">Apple Smart Watch with 42mm/44mm</h5>
    <h6 className="price">₹499</h6>
    </div>
</div>
        </div>
        <div className="col-3">
<div className="wishlist-card position-relative">
<img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>

    <div className="wishlist-card-image">
       <img src="images/watch.jpg"  className=" img-fluid w-100"alt="watch" />
    </div>
    <div className='py-2 px-3'>
    <h5 className="title">Apple Smart Watch with 42mm/44mm</h5>
    <h6 className="price">₹499</h6>
    </div>
</div>
        </div>
        <div className="col-3">
<div className="wishlist-card position-relative">
<img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>

    <div className="wishlist-card-image">
       <img src="images/watch.jpg"  className=" img-fluid w-100"alt="watch" />
    </div>
    <div className='py-2 px-3'>
    <h5 className="title">Apple Smart Watch with 42mm/44mm</h5>
    <h6 className="price">₹499</h6>
    </div>
</div>
        </div>
    </div>
  </Container>
  </>
}

export default Wishlist