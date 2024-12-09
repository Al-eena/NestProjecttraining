import axios from "axios";
const url="http:localhost:3000/course"

export const addCourse=(course:any)=>{

    return axios.post(course);
}