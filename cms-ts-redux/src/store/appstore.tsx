// collect all reducers into a single reducers

import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "../appSlicers/userSlicer";
import courseSlicer from "../appSlicers/courseSlicer";

const myAppStore= configureStore({
    reducer:{
        user: userSlicer,
        course: courseSlicer
    }
})

export default myAppStore