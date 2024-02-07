import Swal from "sweetalert2";
import {UpdateReqApi} from "../ApiRequest/ApiRequest.js";

 export function UpdateTodo(id,status){
     return Swal.fire({
         title: "Change Status",
         input: "select",
         inputOptions: {
             New:"New",
             Completed:"Completed",
             Progress:"Progress",
             Cancelled:"Cancelled"
         },
         inputValue:status,
         showCancelButton: true,
         confirmButtonText: "OK"
     }).then((result)=> {
         if (result.isConfirmed && result.value !== undefined) {
             return UpdateReqApi(id, result.value).then((res) => {
                 return res;
             });
         }
     })
 }

