import {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {Toaster} from "react-hot-toast";
const New =lazy(()=>import('../components/New/New'))
const NewPage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <New/>
                    <Toaster/>
                </Suspense>
            </MasterLayout>
        </>
    );
};

export default NewPage;