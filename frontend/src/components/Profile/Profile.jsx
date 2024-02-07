import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {profileGetApi, profileUpdateApi} from "../../ApiRequest/ApiRequest.js";
import {ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    let firstNameRef,lastNameRef,emailRef,mobileRef,passwordRef,userImageRef,userImViewRef=useRef();

    useEffect(() => {
        profileGetApi()
    }, []);

    const ProfileData = useSelector((state) => state.profile.value);

    let navigate=useNavigate();
    const previewImage=()=>{
        let ImgFile=userImageRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            userImViewRef.src=base64Img
        })
    }
    const updateProfileBtn = () =>{
        let firstName=firstNameRef.value;

        let lastName=lastNameRef.value;
        let email=emailRef.value;
        let mobile=mobileRef.value;
        let password=passwordRef.value;
        let photo=userImViewRef.src;
        console.log(firstName,lastName,email,mobile,password,photo)

        if(IsEmpty(firstName)){
            ErrorToast("First Name is Required")
        }else if(IsEmpty(lastName)){
            ErrorToast("Last Name is Required")
        }else if(IsEmpty(email)){
            ErrorToast("Email address is Required")
        }else if(IsEmail(email)){
            ErrorToast("Valid Email address is Required")
        }else if(IsEmpty(mobile)){
            ErrorToast("Mobile Number is Required")
        }else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile Number is Required")
        }else if(IsEmpty(password)){
            ErrorToast("Password is Required")
        }else{
            profileUpdateApi(firstName,lastName,email,mobile,password,photo).then((result)=>{
                if (result===true){
                    navigate("/")
                }
            })
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="card shadow-lg border-0">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <img ref={(input)=>userImViewRef=input} src={ProfileData['photo']}  className="icon-nav-img-lg"  alt=""/>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-4 p-2">
                                            <label htmlFor="profile">Profile Picture</label>
                                            <input onChange={previewImage} ref={(input)=>userImageRef=input} type="file" className="form-control animated fadeInUp"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label htmlFor="firstName">First Name</label>
                                            <input key={Date.now()} ref={(input)=>firstNameRef=input} defaultValue={ProfileData['firstName']} type="text" className="form-control animated fadeInUp"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input key={Date.now()} ref={(input)=>lastNameRef=input} defaultValue={ProfileData['lastName']} type="text" className="form-control animated fadeInUp"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label htmlFor="Email">Email</label>
                                            <input key={Date.now()} ref={(input)=>emailRef=input} defaultValue={ProfileData['email']} readOnly={true} type="email" className="form-control animated fadeInUp"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label htmlFor="Mobile">Mobile</label>
                                            <input key={Date.now()} ref={(input)=>mobileRef=input} defaultValue={ProfileData['mobile']} type="mobile" placeholder="Mobile"  className="form-control animated fadeInUp"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label htmlFor="password">Password</label>
                                            <input key={Date.now()} ref={(input)=>passwordRef=input} defaultValue={ProfileData['password']} type="password" className="form-control animated fadeInUp"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <button onClick={updateProfileBtn} className="btn btn-purple w-100 animated fadeInUp">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;