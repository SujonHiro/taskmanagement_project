import {createSlice} from "@reduxjs/toolkit";

export const summerySlice=createSlice({
    name:"summery",
    initialState:{
        value:[]
    },
    reducers:{
        SetSummery:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {SetSummery}=summerySlice.actions;
export default summerySlice.reducer;