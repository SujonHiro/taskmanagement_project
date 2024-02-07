import {lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
const Dashboard =lazy(()=>import('../components/Dashboard/Dashboard'))
const DashboardPage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Dashboard/>
                </Suspense>
            </MasterLayout>
        </>
    );
};

export default DashboardPage;