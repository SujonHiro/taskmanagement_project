import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store.js";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice.js";
import {getToken, setToken, setUserDetails} from "../helper/SessionAlert.js";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/task-slice.js";
import {SetSummery} from "../redux/state-slice/summery-slice.js";
import {SetProfile} from "../redux/state-slice/profile-slice.js";

const BaseURL="https://taskmanagement-seven.vercel.app/api/v1"

const AxiosHeader={headers:{"token":getToken()}}
//Login Section
export const LoginAPI=async(email,password)=>{
    store.dispatch(ShowLoader())
    let Url= BaseURL + '/login';
    let postBody={email:email,password:password}
    try {
        return await axios.post(Url,postBody).then((res)=>{
            store.dispatch(HideLoader())
            if (res.status===200){
                //code
                SuccessToast("Login Success");
                setToken(res.data['token']);
                setUserDetails(res.data['data']);
                return true;
            }else{
                ErrorToast("Invalid Email or Password")
                return false;
            }
        })
    }catch(e) {
        //code
        ErrorToast("Something Went Wrong",e)
        store.dispatch(HideLoader())
        return false;
    }
}

//Registration section
export const registrationApi=async(firstName,lastName,email,mobile,password,photo)=>{
        //show loader
        store.dispatch(ShowLoader())
    let Url= BaseURL + '/register';
    let postBody={firstName:firstName,lastName:lastName,email:email,mobile:mobile,password:password,photo: photo}
    try {
    return await axios.post(Url,postBody).then((res)=>{
            //hide loader
            store.dispatch(HideLoader())
            if (res.status===200){
                if(res.data['status']==="Fail"){
                    if(res.data['data']['keyPattern']['email']===1){
                        ErrorToast("Email Already Exists");
                        return false;
                    }else{
                        ErrorToast("Something went wrong");
                        return false;
                    }
                }
                else{
                    SuccessToast("Registration Success")
                    return true;
                }
            }else{
                ErrorToast("Something went wrong");
                return false;
            }
        })
    }catch (error) {
        ErrorToast("Something Went Wrong")
        //hide loader
        store.dispatch(HideLoader())
        return false;
    }
}

//Create New Task
export const CreateTaskApi = async(title,desc) => {
    store.dispatch(ShowLoader())
    let Url= BaseURL + '/createTask';
    let postBody={title:title,description:desc,status:"New"}
    try {
        return await axios.post(Url,postBody,AxiosHeader).then((res)=>{
            store.dispatch(HideLoader())
            if(res.status===200){
                SuccessToast("Task Created Successfully");
                return true;
            }else{
                ErrorToast("Something went wrong")
                return false;
            }
        })

    }catch (e){
        ///
        store.dispatch(HideLoader())
        ErrorToast("Something went wrong",e)
        return false;
    }
}
//Get Task by Status
export const TaskByStatus=(Status)=>{
    store.dispatch(ShowLoader())
    let Url= BaseURL + '/taskListByStatus/'+Status;
    try {
        axios.get(Url,AxiosHeader).then((res)=>{
            store.dispatch(HideLoader())
            if(res.status===200){
                if(Status==="New"){
                    store.dispatch(SetNewTask(res.data['data']))
                }else if(Status==="Completed"){
                    store.dispatch(SetCompletedTask(res.data['data']))
                }else if(Status==="Progress"){
                    store.dispatch(SetProgressTask(res.data['data']))
                } else if(Status==="Cancelled"){
                    store.dispatch(SetCanceledTask(res.data['data']))
                }
            }else {
                ErrorToast("Something went wrong")
            }
        })
    }catch (e){
        //error
        ErrorToast("Something went wrong",e)
        store.dispatch(HideLoader())
    }
}

//taskStatusCount
export const taskStatusCountApi=async()=>{
    store.dispatch(ShowLoader())
    let Url= BaseURL+'/taskStatusCount';
    try {
        //
        return await axios.get(Url,AxiosHeader).then((res)=>{
            store.dispatch(HideLoader())
            if(res.status===200){
                store.dispatch(SetSummery(res.data['data']))
            }else {
                ErrorToast("Something went wrong")
            }
        })
    }catch (e){
        //
        ErrorToast("Something went wrong",e)
        store.dispatch(HideLoader())
    }
}
//Delete Api
export const deleteReqApi=async (id)=>{
    store.dispatch(ShowLoader())
    let Url= BaseURL+'/deleteTask/'+id;
    try {
        return await axios.get(Url,AxiosHeader).then((res)=>{
            store.dispatch(HideLoader())
            if(res.status===200){
                SuccessToast("Deleted Successfully")
                return true;
            }else {
                ErrorToast("Something went wrong")
                return false;
            }
        })
    }catch (e){
        //
        ErrorToast("Something went wrong",e)
        store.dispatch(HideLoader())
        return false;
    }
}
//Update Api
export const UpdateReqApi=async(id,status)=>{
    store.dispatch(ShowLoader())
    let Url= BaseURL+'/updateTask/'+id+"/"+status;
    try {
       return await axios.get(Url,AxiosHeader).then((res)=>{
            store.dispatch(HideLoader())
            if (res.status===200){
                SuccessToast("Updated Successfully");
                return true;
            }else {
                ErrorToast("Something went wrong")
                return false;
            }
        })
    }catch (e) {
        ErrorToast("Something went wrong",e)
        store.dispatch(HideLoader())
        return false;
    }
}

//Profile Get
export const profileGetApi=async()=>{
    store.dispatch(ShowLoader())
    let Url= BaseURL+'/profile';
    try {
        await axios.get(Url,AxiosHeader).then((res)=>{
            store.dispatch(HideLoader())
            if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
            }else {
                ErrorToast("Something went wrong")
            }
        })
    }catch (e){
        ErrorToast("Something went wrong",e)
        store.dispatch(HideLoader())
    }
}

//Profile Update api
/*export const profileUpdateApi=async(firstName,lastName,email,mobile,password,photo)=>{
    try{
    store.dispatch(ShowLoader());
    let Url=BaseURL+'/profile-update';
    let postBody={firstName:firstName,lastName:lastName,email:email,mobile:mobile,password:password,photo:photo};
    let UserDetails={firstName:firstName,lastName:lastName,email:email,mobile:mobile,photo:photo};

 return await axios.post(Url,postBody,AxiosHeader).then((res)=>{
     store.dispatch(HideLoader());
     if(res.status===200){
         SuccessToast("Profile Update Success");
         setUserDetails(UserDetails);
         return true;
     }else{
         ErrorToast("Something went wrong")
         return false;
     }
 })
    }catch (e) {
        ErrorToast("Something went wrong",e)
        store.dispatch(HideLoader())
        return false;
    }
}*/

export function profileUpdateApi(firstName,lastName,email,mobile,password,photo){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/profile-update";
    let PostBody={firstName:firstName,lastName:lastName,email:email,mobile:mobile,password:password,photo:photo}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}

    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Profile Update Success")
            setUserDetails(UserDetails)
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong",err)
        store.dispatch(HideLoader())
        return false;
    });
}