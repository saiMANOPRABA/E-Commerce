import React from 'react';
import ReactStars from 'react-rating-stars-component';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import watch from '../images/watch.jpg';
import Container from '../components/Container';


const SingleProduct = () => {
  const props = {width: 400, height: 250, zoomWidth: 500, img:{watch}};
  return<>
  <Meta title={"View Product"}/>
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
          <div className="main-product-image"> 
          <div>
          <ReactImageZoom {...props} />
          </div>
          </div>
          </div>
          <div className="col-6"> </div>
        </div>
    </Container>

    <Container class1="description-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Description</h3>
            <p className="bg-white p-3">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus ipsum modi vero ex consequatur quam sapiente quaerat odio ipsam placeat molestiae beatae dignissimos deleniti assumenda, recusandae officia explicabo aperiam.
Non aliquam molestias amet esse deserunt a quaerat id eos autem obcaecati reprehenderit corporis illo, perspiciatis eius accusantium corrupti incidunt ea quidem soluta nemo ipsa nesciunt similique neque consequuntur. Ipsam.
Consequuntur nulla eligendi dolorum fugiat inventore enim tempora nisi ratione reprehenderit assumenda aperiam, facere officiis, impedit quae consequatur quibusdam obcaecati iste quidem quaerat eaque aliquam. Cumque cupiditate velit magnam dolorum.
Voluptas ducimus quisquam dicta ullam temporibus cum soluta repudiandae, sint blanditiis quas, non corrupti possimus laborum iusto error earum deleniti repellendus officia, ab deserunt quod. Illum eligendi quae mollitia fugiat!            </p>
          </div>
        </div>
    </Container>

  <Container class1="review-wrapper pt-4 mt-0 home-wrapper-2">
      <div className="row">
        <div className="col-12"> 
        <h4 className='mb-2'>Customer Reviews</h4>
        <div className="review-head d-flex justify-content-between align-items-end">
          <div>
            <span className='d-flex mt-2'>Customer 1:</span>
            <div className="d-flex align-items-center mb-2 gap-10 ">
            <ReactStars value={2} edit={false}
    count={5}
    size={24}
    activeColor="#ffd700"/>
    <p className='mb-0'>Based On 2 Reveiws</p>
            </div>

            <span className='mt-3'>Customer 2:</span>
            <div className="d-flex align-items-center  gap-10 ">
            <ReactStars value={4} edit={false}
    count={5}
    size={24}
    activeColor="#ffd700"/>
    <p className='mb-0'>Based On 4 Reveiws</p>
            </div>
          </div>
          <div></div>
        </div>
        </div>
      </div>
  </Container>

    <Container class1="populer-prod-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col12">
          <h3 className="section-heading">Our Populer Products</h3>
        </div>
      </div>
      <div className="row">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  </Container>
  </>
}

export default SingleProduct