import React from 'react';
import Container from '../components/Container';
import Meta from '../components/Meta';


const SingleBlog = () => {
  return <>
  <Meta title={"About blog"}/>
  <Container class1="blog-wrapper home-wrapper-2 py-5">
       <div className="row">
        <div className="col-12">
       <div className="single-blog-card">
        <h3 className="title">A Beautiful Morning Renaissance</h3>
        <img src="" alt=""/>
       </div>
        </div>
       </div>
        </Container>
  
  </>
}

export default SingleBlog