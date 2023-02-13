import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const CompareProduct = () => {
  return<>
  <Meta title={"Compare"}/>
  <BreadCrumb title="compare"/>
  <Container class1="compare-product-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-3">
          <div className="compare-product-card position-relative">
            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
            <div className="product-card-image">
              <img src="images/watch-1.jpeg" alt="img"/>
              <div className="compare-product-details">
                <h5 className="title">Apple Smart Watch with 42mm/44mm </h5>
                <h6 className="price mt-3">₹499</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watches</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>SKU004</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In-Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <div>
                <ul className='colors ps-0'>
                  <li></li>
                  <li></li>
                  <li></li>
                  </ul>
                  </div>
                  </div>
                  <div className="product-detail">
                    <h5>size:</h5>
                    <p>M L XL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="compare-product-card position-relative">
            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid"/>
            <div className="product-card-image">
              <img src="images/watch-1.jpeg" alt="img"/>
              <div className="compare-product-details">
                <h5 className="title">Apple Smart Watch with 42mm/44mm </h5>
                <h6 className="price mt-3">₹499</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watches</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>SKU004</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In-Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <div>
                <ul className='colors ps-0'>
                  <li></li>
                  <li></li>
                  <li></li>
                  </ul>
                  </div>
                  </div>
                  <div className="product-detail">
                    <h5>size:</h5>
                    <p>M L XL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Container>
  </>
}

export default CompareProduct