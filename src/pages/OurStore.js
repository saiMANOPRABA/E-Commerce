import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Container from '../components/Container';


const OurStore = () => {
  const [grid,setGrid]= useState(4);
  return <>
   <Meta title={"Our Store"}/>
  <BreadCrumb title="Our Store"/>
  <Container class1="store-wrapper home-wrapper-2 py-5">
    <div className="row">
      <div className="col-3">
        <div className='filter-card mb-3'>
          <h3 className="filter-title">
            Shop By Categories
          </h3>
          <div>
            <ul className='ps-0'>
              <li>Watch</li>
              <li>Tv</li>
              <li>Camera</li>
              <li>Laptop</li>
            </ul>
          </div>
        </div>
        <div className='filter-card mb-3'>
          <h3 className="filter-title">
            Filter By
            <div>
              <h5 className="sub-title"> Availability</h5>
              <div>
              <div className="form-check">
              <input className='form-check-input' type="checkbox" id="" value=""/>
              <label className='form-check-label' htmlFor="">
                In Stock (2)
              </label>
              </div>
              <div>
              <input className='form-check-input' type="checkbox" id="" value=""/>
              <label className='form-check-label' htmlFor="">
                &nbsp; Out of Stock (0) 
              </label>
              </div>
              </div>
              <h5 className="sub-title">Price</h5>
              <div className='d-flex align-items-center gap-10'>
              <div className="form-floating">
  <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
  <label htmlFor="floatingInput">From</label>
              </div>
              <div className="form-floating">
  <input type="email" className="form-control" id="floatingInput1" placeholder="To"/>
  <label htmlFor="floatingInput1">to</label>
              </div>

              </div>
              <h5 className="sub-title">Colors</h5>
               <div>
                <ul className='colors ps-0'>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
               </div>
               <h5 className="sub-title">Size</h5>
              <div>
              <div className="form-check">
              <input className='form-check-input' type="checkbox" id="size-1" value=""/>
              <label className='form-check-label' htmlFor="size-1">
                S (2)
              </label>
              </div>
              <div className="form-check">
              <input className='form-check-input' type="checkbox" id="size-2" value=""/>
              <label className='form-check-label' htmlFor="size-2">
                M (4)
              </label>
              </div>
              <div className="form-check">
              <input className='form-check-input' type="checkbox" id="size-3" value=""/>
              <label className='form-check-label' htmlFor="size-3">
                L (1)
              </label>
              </div>
              <div className="form-check">
              <input className='form-check-input' type="checkbox" id="size-4" value=""/>
              <label className='form-check-label' htmlFor="size-4">
                XL (5)
              </label>
              </div>
              </div>
            </div>
          </h3>
        </div>
        <div className='filter-card mb-3'>
          <h3 className="filter-title">
            Product Tags
          </h3>
          <div>
            <div className="product-tags">
            <span className="badge rounded-3 py-3 px-2">
             Headphone
            </span>
            <span className="badge rounded-3 py-3 px-2">
             Laptop
            </span>
            <span className="badge rounded-3 py-3 px-2">
             Mobile
            </span>
            <span className="badge rounded-3 py-3 px-2">
             Speaker
            </span>
            <span className="badge rounded-3 py-3 px-2">
             Tablet
            </span>
            <span className="badge rounded-3 py-3 px-2">
             Accessories
            </span>
            </div>
          </div>
        </div>
        <div className='filter-card mb-3'>
          <h3 className="filter-title">
            Random Product
          </h3>
          <div>
            <div className="random-products d-flex">
              <div className="w-50">
                <img src="images/watch.jpg" className='img-fluid' alt="product"/>
              </div>
              <div className="w-50">
                 <h5>Smart Watches bulk 10 pack multi-color</h5>
                 <ReactStars value={3} edit={false}
                   count={5}
                   size={24}
                   activeColor="#ffd700"
                 />
                 <p>₹499</p>
              </div>
            </div>
            <div className="random-products d-flex mt-3">
              <div className="w-50">
                <img src="images/watch.jpg" className='img-fluid' alt="product"/>
              </div>
              <div className="w-50">
                 <h5>Smart Watches bulk 10 pack multi-color</h5>
                 <ReactStars value={3} edit={false}
                   count={5}
                   size={24}
                   activeColor="#ffd700"
                 />
                 <p>₹499</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-9">
        <div className="filter-sort-grid mb-4">
          <div className='d-flex justify-content-between align-items-center'>
          <div className="d-flex align-items-center gap-10">
            <p className='mb-0 d-block' style={{"width":"100px"}}>Sort By:</p>
            <select name="" id="" className="form-control form-select">
              <option value="best-selling">Best Selling</option>
              <option value="title-ascending">Alphabettically A-Z</option>
              <option value="title-descending">Alphabettically Z-A</option>
              <option value="price-ascending">price Low to High</option>
              <option value="price-descending">price High to Low</option>
              <option value="date-a scending">Date New to Old</option>
              <option value="date-descending">Date Old to New</option>
            </select>
          </div>
          <div className='d-flex align-items-center gap-10'>
          <p className="total-products mb-0">21 Products</p>
          <div className="d-flex gap-10 align-items-center grid">
            <img onClick={()=>{setGrid(3)}} src="images/gr4.svg" alt="grid" className="d-block img-fluid"/>
            <img onClick={()=>{setGrid(4)}} src="images/gr3.svg" alt="grid" className="d-block img-fluid"/>
            <img onClick={()=>{setGrid(6)}} src="images/gr2.svg" alt="grid" className="d-block img-fluid"/>
            <img onClick={()=>{setGrid(12)}} src="images/gr.svg" alt="grid" className="d-block img-fluid"/>
          </div>
          </div>
          </div>
        </div>
        <div className="product-list pb-5">
         <div className="d-flex gap-10 flex-wrap">
         <ProductCard grid={grid}/>
         </div>
        </div>
      </div>
    </div>
  </Container>
  </>
}

export default OurStore