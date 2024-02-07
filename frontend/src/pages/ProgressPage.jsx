import React, {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";

const Progress =lazy(()=>import('../components/Progress/Progress'))
const ProgressPage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                   <Progress/>

                </Suspense>
            </MasterLayout>
        </>
    );
};

export default ProgressPage;