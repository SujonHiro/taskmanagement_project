import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import {Suspense,lazy} from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";

const Canceled =lazy(()=>import('../components/Canceled/Canceled'))


const CanceledPage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Canceled/>
                </Suspense>

            </MasterLayout>
        </>
    );
};

export default CanceledPage;