import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';


const ForgotPassword = () => {
  return <>
  <Meta title={"Forgot Password"}/>
  <Container class1="login-wrapper home-wrapper-2 py-5">
  <div className="row">
    <div className="col-12">
        <div className="login-card">
            <h3 className="title text-center text-dark">Reset Your Password</h3>
            <p className="text-center my-2 mb-4">We will send you an email to reset your password</p>
            <form className='d-flex flex-column gap-15'>
              <CustomInput type="email" name="email" placeholder='Enter Your Email'/>
            
                    <div className="mt-3 d-flex justify-content-center align-items-center">
                         <button type='submit' className="button">Submit</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                         <Link to="/login" className='text-login'>Cancel</Link>
                         </div>
            </form>
        </div>
    </div>
  </div>
  </Container>
  </>
}

export default ForgotPassword