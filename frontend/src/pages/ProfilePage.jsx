
import LazyLoader from "../components/MasterLayout/LazyLoader.jsx";
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import {lazy, Suspense} from "react";
const Profile =lazy(()=>import('../components/Profile/Profile.jsx'))
const ProfilePage = () => {
    return (
        <>
           <MasterLayout>
               <Suspense fallback={<LazyLoader/>}>
                   <Profile/>
               </Suspense>
           </MasterLayout>
        </>
    );
};

export default ProfilePage;