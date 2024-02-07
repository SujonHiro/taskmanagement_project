
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import {lazy, Suspense} from "react";

const Create =lazy(()=>import('../components/Create/Create'))
const CreatePage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Create/>

                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CreatePage;