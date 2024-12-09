import axios from "axios";
const url = "http://localhost:3000/courses";

export const addCourse = (course: any): Promise<Number> => {
  return axios.post(url, course)
    .then((res) => {
        console.log(res);
        
      return res.status;
    })
    .catch((err) => {
      return err.status;
    });
};

export const getAllCourse=():Promise<any>=>{
  return axios.get(url)
  .then((res)=>{
    return res.data;
  })
  .catch((errr)=>{
    return errr;
  })

}