import {createSlice} from "@reduxjs/toolkit";
export const taskSlice=createSlice({
    name:'tasks',
    initialState:{
       New:[],
        Completed:[],
        Progress:[],
        Cancelled:[]
    },
    reducers:{
        SetNewTask:(state,action)=>{
            state.New=action.payload
        },
        SetCompletedTask:(state,action)=>{
            state.Completed=action.payload
        },
        SetProgressTask:(state,action)=>{
            state.Progress=action.payload
        },
        SetCanceledTask:(state,action)=>{
            state.Cancelled=action.payload
        },
    }
})

export const {SetNewTask,SetCompletedTask,SetProgressTask,SetCanceledTask}=taskSlice.actions;
export default  taskSlice.reducer;