import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return <>

    <div className="blog-card">
    <div className="card-image">
        <img src="images/blog-1.jpg" alt="blog" className='img-fluid w-100'/>
    </div>
    <div className="blog-content">
        <p className='date'>29-DEC-22</p>
        <h5 className="tittle">A Beautiful sunday Morning</h5>
        <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dolor soluta sint laboriosam velit.</p>
        <Link className='button' to="/blog/id:">Read More</Link>
    </div>
    </div>
  
  </>
}

export default BlogCard