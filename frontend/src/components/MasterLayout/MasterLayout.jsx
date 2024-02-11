
import {NavLink} from "react-router-dom";

import {AiOutlineMenuUnfold, AiOutlineUser, AiOutlineLogout, AiOutlineCheckCircle, AiOutlineEdit} from "react-icons/ai";
import {MdOutlineCancelPresentation} from "react-icons/md";
import {BsHourglass, BsListNested} from "react-icons/bs";
import {RiDashboardLine} from "react-icons/ri";
import {useRef} from "react";
import {getUserDetails, sessionRemove} from "../../helper/SessionAlert.js";

const MasterLayout = (props) => {
    let contentRef,sideNavRef=useRef()
    const menubarClickHandler=()=>{
        let sideNav=sideNavRef;
        let content=contentRef;
        if(sideNav.classList.contains('side-nav-open')){
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand")
            content.classList.remove("content")
        }else {
            sideNav.classList.add("side-nav-open");
            sideNav.classList.remove("side-nav-close");
            content.classList.add("content")
            content.classList.remove("content-expand")
        }
    }
    const logoutBtn=()=>{
        sessionRemove();
    }
    return (
        <>
            <nav className="navbar fixed-top px-0 bg-body-tertiary shadow-sm">
                <div className="container-fluid">
                   <div className="navbar-brand">
                       <a className="icon-nav m-0 h5" onClick={menubarClickHandler} ><AiOutlineMenuUnfold/></a>
                       <a className="" href="#">TaskManager</a>
                   </div>
                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <div>
                                <img className="icon-nav-img icon-nav" src={getUserDetails()['photo']} alt="profile"/>
                            </div>
                            <div className="user-dropdown-content">
                                <div className="text-center mt-4">
                                    <img className="icon-nav-img" src={getUserDetails()['photo']}  alt=""/>
                                    <h6>{getUserDetails()['firstName']+" "+ getUserDetails()['lastName']}</h6>
                                    <hr className="user-dropdown-divider p-0"/>
                                </div>
                                <NavLink to="/profile" className="side-bar-item">
                                    <AiOutlineUser className="side-bar-item-icon"/>
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={logoutBtn} className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon"/>
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div ref={(div)=>{sideNavRef=div}} className="side-nav-open">
                <NavLink  className={(navData)=>navData.isActive?"side-bar-item-active side-bar-item mt-2":"side-bar-item mt-2"} to="/dashboard">
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData)=>navData.isActive?"side-bar-item-active side-bar-item mt-2":"side-bar-item mt-2"} to="/create" >
                    <AiOutlineEdit className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Create New</span>
                </NavLink>

                <NavLink className={(navData)=>navData.isActive?"side-bar-item-active side-bar-item mt-2":"side-bar-item mt-2"} to="/all" >
                    <BsListNested className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">New Task</span>
                </NavLink>

                <NavLink className={(navData)=>navData.isActive?"side-bar-item-active side-bar-item mt-2":"side-bar-item mt-2"} to="/progress" >
                    <BsHourglass className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">In Progress</span>
                </NavLink>

                <NavLink className={(navData)=>navData.isActive?"side-bar-item-active side-bar-itemt-2":"side-bar-item mt-2"}  to="/completed" >
                    <AiOutlineCheckCircle className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink className={(navData)=>navData.isActive?"side-bar-item-active side-bar-item mt-2":"side-bar-item mt-2"}   to="/canceled" >
                    <MdOutlineCancelPresentation className="side-bar-item-icon" />
                    <span className="side-bar-item-caption">Canceled</span>
                </NavLink>
            </div>
            <div ref={(div)=>{contentRef=div}} className="content">
                {/* eslint-disable-next-line react/prop-types */}
                {props.children}
            </div>
        </>
    );
};

export default MasterLayout;