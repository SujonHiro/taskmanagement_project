
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import {lazy, Suspense} from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";

const Completed =lazy(()=>import('../components/Completed/Completed'))
const CompletedPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Completed/>

                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CompletedPage;