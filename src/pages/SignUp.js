import React from 'react';
import Container from '../components/Container';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  return <>
  <Meta title={"Sign Up"}/>
  <Container class1="login-wrapper home-wrapper-2 py-5">
  <div className="row">
    <div className="col-12">
        <div className="login-card">
            <h3 className="title text-center text-dark">Sign Up</h3>
            <form className='d-flex flex-column gap-15'>
                <CustomInput  type="text" name="first-name"  placeholder='First Name'/>
                <CustomInput  type="text" name="last-name"  placeholder='Last Name'/>
                <CustomInput  type="email" name="email" placeholder='Enter Your Email'/>
                <CustomInput  type="password" name="password"  placeholder='Enter Your Password'/>
                <div >
                    <div className="mt-3 d-flex justify-content-center align-items-center">
                         <button type="submit" className="button">Create</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
  </Container>
  
  </>
}

export default SignUp