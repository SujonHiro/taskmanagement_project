import { FaTasks } from "react-icons/fa";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {taskStatusCountApi} from "../../ApiRequest/ApiRequest.js";
const Dashboard = () => {
    useEffect(() => {
        taskStatusCountApi();
    }, []);

    const summeryList = useSelector((state) => state.summery.value)
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        summeryList.map((item,i)=>
                            <div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3 p-2">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="text-purple animated fadeInUp">{item.sum}</h4>
                                            <h6 className="animated fadeInUp"><FaTasks size={20} color={"purple"}/></h6>
                                        </div>
                                        <h5 className="text-muted animated fadeInUp">{item._id}</h5>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>

        </>
    );
};

export default Dashboard;