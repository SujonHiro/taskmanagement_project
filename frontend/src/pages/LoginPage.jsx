import {lazy, Suspense} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";

const Login =lazy(()=>import('../components/Login/Login'))
const LoginPage = () => {
    return (
        <>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </>
    );
};

export default LoginPage;