import {Link} from "react-router-dom";


const ForgetPass = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-8 center-screen">
                        <div className="card w-75 p-4 border-0">
                            <div className="card-body">
                                <h4 className="text-center text-uppercase">Forget Password</h4>
                                <input type="text" className="form-control animated fadeInUp my-3" placeholder="OTP"/>
                                <button className="btn btn-purple w-100 animated fadeInUp">Next</button>

                                <div className="text-center w-100 mt-4">
                                    <Link to="/login" className="text-center text-muted ms-3  animated fadeInUp">Sign In</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPass;