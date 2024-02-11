import {Link} from "react-router-dom";
import {useRef} from "react";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/FormHelper";
import {LoginAPI} from "../../ApiRequest/ApiRequest";
const Login = () => {
    let emailRef,passwordRef=useRef();
const LoginBtn=()=>{
    let email=emailRef.value;
    let password=passwordRef.value;

    if(IsEmpty(email)){
        ErrorToast("Email is Required")
    }else if(IsEmail(email)){
        ErrorToast("Valid Email address is Required")
    }else if(IsEmpty(password)){
        ErrorToast("Password is Required")
    }
    else {
        //api
        LoginAPI(email,password).then((result)=>{
            if(result===true){
                    window.location.href="/dashboard";
            }
        })
    }
}
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-8 center-screen">
                        <div className="card w-75 p-4 border-0">
                            <div className="card-body">
                                <h4 className="text-center text-uppercase">Sign in</h4>
                                <input ref={(input)=>emailRef=input} type="email" className="form-control animated fadeInUp my-3" placeholder="Email"/>
                                <input ref={(input)=>passwordRef=input} type="password" className="form-control animated fadeInUp mb-3" placeholder="Password"/>
                                <button onClick={LoginBtn} className="btn btn-purple w-100 animated fadeInUp">Sign in</button>
                                <div className="text-center w-100 mt-4">
                                            <Link to={"/registration"} className="text-center text-muted ms-3  animated fadeInUp">Sign Up</Link>
                                            <br/>
                                            <Link to={"/registration"} className="text-center ms-3 text-muted animated fadeInUp">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;