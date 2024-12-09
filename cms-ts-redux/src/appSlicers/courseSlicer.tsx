import { createSlice } from "@reduxjs/toolkit"

//
const initialState= {
    courseList:[]
}

const courseSlicer= createSlice(
    {
        name:'course',
        initialState,
        reducers:{            
            addCourse:(state,action)=>{
                //state.courseList= [...state.courseList, action.payload]                
            },
            getCourse:(state)=>{
                // state.courseList;

            }
            
        }
    }
)

const {addCourse, getCourse}= courseSlicer.actions

 export  default courseSlicer.reducer