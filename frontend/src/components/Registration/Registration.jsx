import {Link, useNavigate} from "react-router-dom";
import {useRef} from "react";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper.js";
import {registrationApi} from "../../ApiRequest/ApiRequest.js";


const Registration = () => {
    let firstNameRef,lastNameRef,emailRef,mobileRef,passwordRef=useRef();
    let navigate=useNavigate();
    const registerBtn = () => {
      let firstName = firstNameRef.value
        let lastName = lastNameRef.value
        let email = emailRef.value
        let mobile = mobileRef.value
        let password = passwordRef.value
        let photo="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA3LjEtYzAwMCA3OS44OWQ2M2EwMSwgMjAyMS8xMi8xMC0xNToyMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzM0FEOUYxQjA3QzExRUVCRTczRDc2OUM2RkUzNTgwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzM0FEOUYyQjA3QzExRUVCRTczRDc2OUM2RkUzNTgwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDMzQUQ5RUZCMDdDMTFFRUJFNzNENzY5QzZGRTM1ODAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDMzQUQ5RjBCMDdDMTFFRUJFNzNENzY5QzZGRTM1ODAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkL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"

        if(IsEmpty(firstName)){
            ErrorToast("First Name is Required")
        }else if(IsEmpty(lastName)){
            ErrorToast("Last Name is Required")
        }else if(IsEmpty(email)){
            ErrorToast("Email address is Required")
        } else if(IsEmail(email)){
            ErrorToast("Valid Email address is Required")
        } else if(IsEmpty(mobile)){
            ErrorToast("Mobile Number is Required")
        }else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile Number is Required")
        }else if(IsEmpty(password)){
            ErrorToast("Password is Required")
        }else{
            registrationApi(firstName,lastName,email,mobile,password,photo).then((result)=>{
                if(result===true){
                    navigate('/login');
                }
            })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-8 center-screen">
                        <div className="card w-75 p-4 border-0 my-5">
                            <div className="card-body">
                                <h4 className="text-center text-uppercase">Sign Up</h4>
                                <input ref={(input)=>firstNameRef=input} type="text" className="form-control animated fadeInUp my-3" placeholder="First Name"/>
                                <input ref={(input)=>lastNameRef=input} type="text" className="form-control animated fadeInUp my-3" placeholder="Last Name"/>
                                <input ref={(input)=> emailRef = input} type="email" className="form-control animated fadeInUp mb-3" placeholder="Email"/>
                                <input ref={(input)=> mobileRef = input} type="text" className="form-control animated fadeInUp mb-3" placeholder="Mobile Number"/>
                                <input ref={(input)=> passwordRef = input} type="password" className="form-control animated fadeInUp mb-3" placeholder="Password"/>
                                <button onClick={registerBtn} className="btn btn-purple w-100 animated fadeInUp">Sign Up</button>
                                <div className="text-center w-100 mt-4">
                                    <Link to="/login" className="text-center text-muted ms-3  animated fadeInUp">Sign In</Link>
                                    <br/>
                                    <Link to="/forgetpass" className="text-center ms-3 text-muted animated fadeInUp">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;