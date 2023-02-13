import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';


const Login = () => {
  return <>
  <Meta title={"Login"}/>
  <Container class1="login-wrapper home-wrapper-2 py-5">
  <div className="row">
    <div className="col-12">
        <div className="login-card">
            <h3 className="title text-center text-dark">Login</h3>
            <form className='d-flex flex-column gap-15'>
                <CustomInput type="email" name="email" placeholder='Enter Your Email'/>
                <CustomInput type="password" name="password" placeholder='Enter Your Password'/>
                <div >
                    <Link to="/forgot-password" className='d-flex justify-content-end text-dark'>Forgot Password?</Link>
                    <div className="mt-3 d-flex justify-content-space-around align-items-center gap-15">
                         <div className='button1'>
                         <button type="submit" className="button">Login</button>
                         <Link to="/signup" className='button signup'>SignUp</Link>
                         </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
  </Container>
  </>
}

export default Login