
import {FaTasks} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import {useEffect} from "react";
import {TaskByStatus} from "../../ApiRequest/ApiRequest.js";
import {useSelector} from "react-redux";
import {deleteAlertToDo} from "../../helper/DeleteAlert.js";
import {UpdateTodo} from "../../helper/UpdateAlert.js";



const Canceled = () => {
    useEffect(() => {
        TaskByStatus("Cancelled")
    }, []);
    const CanceledList = useSelector((state) => state.tasks.Cancelled)
    const DeleteItem=(id)=>{
        deleteAlertToDo(id).then((result)=>{
            if(result===true){
                TaskByStatus("Cancelled")
            }
        })
    }
    const UpdateStatusBtn=(id,status)=>{
        UpdateTodo(id,status).then((result)=>{
            if (result===true){
                TaskByStatus("Cancelled")
            }
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h4>Task Canceled</h4>
                    </div>
                    <div className="float-end col-12 col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input type="search" className="form-control w-100" placeholder="Search here"/>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-purple w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0">
                    {CanceledList.map((item,i)=>
                        <div key={i.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="text-purple animated fadeInUp">{item.title}</h4>
                                        <h6 className="animated fadeInUp"><FaTasks size={20} color={"purple"}/></h6>
                                    </div>
                                    <p className="text-muted animated fadeInUp"> {item.description}</p>
                                    <p className="animated fadeInUp p-0 m-0">
                                        <SlCalender color={"primary"}/>  {item.createdAt}
                                        <a onClick={UpdateStatusBtn.bind(this,item._id,item.status)} className="icon-nav text-purple mx-1" ><CiEdit size={20}/></a>
                                        <a onClick={DeleteItem.bind(this,item._id)} className="icon-nav text-purple mx-1" href=""><MdDeleteForever size={20}/></a>
                                        <a className="badge float-end bg-danger" href="">{item.status}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

export default Canceled;