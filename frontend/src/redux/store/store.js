import {configureStore} from "@reduxjs/toolkit";
import settingsSlice from "../state-slice/settings-slice.js";
import taskSlice from "../state-slice/task-slice.js";
import summerySlice from "../state-slice/summery-slice.js";
import profileSlice from "../state-slice/profile-slice.js";

export default configureStore({
    reducer:{
        settings:settingsSlice,
        tasks:taskSlice,
        summery:summerySlice,
        profile:profileSlice
    }
})