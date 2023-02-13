import React from 'react';
import Meta from '../components/Meta';
import Container from '../components/Container'
import CustomInput from '../components/CustomInput';
const ResetPassword = () => {
  return<>
  <Meta title={"Reset Password"}/>
  <Container class1="login-wrapper home-wrapper-2 py-5">
  <div className="row">
    <div className="col-12">
        <div className="login-card">
            <h3 className="title text-center text-dark">Reset Password</h3>
            <form className='d-flex flex-column gap-15'>
            <CustomInput type="password" name="password" className="form-control" placeholder='Enter Your New Password'/>
                <CustomInput type="password" name="password" className="form-control" placeholder='Re-Enter Your New Password'/>
                <div >
                    <div className="mt-3 d-flex justify-content-center align-items-center">
                         
                         <button className="button border-0">OK</button>
                         
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
  </Container>
  </>
}

export default ResetPassword