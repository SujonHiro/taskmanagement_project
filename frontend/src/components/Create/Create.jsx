
import {ErrorToast, IsEmpty} from "../../helper/FormHelper.js";
import {useRef} from "react";
import {CreateTaskApi} from "../../ApiRequest/ApiRequest.js";
import {useNavigate} from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
const Create = () => {
let taskTitleRef,descriptionRef=useRef();
    let navigate=useNavigate();
    const CreateBtn=()=>{
        let title=taskTitleRef.value;
        let desc=descriptionRef.value;

        if(IsEmpty(title)){
            ErrorToast("Task Name is Required");
        }else if(IsEmpty(desc)){
            ErrorToast("Description is Required");
        }else{
            CreateTaskApi(title,desc).then((result)=>{
                if(result===true){
                        navigate("/all");
                }
            })
        }
    }
    return (
        <>
            <div className="content-body">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
                        <div className="card border-0 h-100 shadow-sm">
                            <div className="card-body">
                                <h4 className="text-center my-3">Crate New Task</h4>
                                    <input ref={(input)=>taskTitleRef=input} type="text" className="form-control animated fadeInUp" placeholder="Task Name"/>
                                    <br/>
                                <textarea ref={(input)=>descriptionRef=input} className="form-control animated fadeInUp"  rows={5}></textarea>
                                <br/>
                                <button onClick={CreateBtn} className="btn btn-purple float-end animated fadeInUp">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;