import { Injectable } from '@nestjs/common';
import { Course, CourseStatus } from './course.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateCourseDTO } from './dto/create-course-dto';
import axios from 'axios';

@Injectable()
export class CourseService {
  // store all the Courses in the Form list
  private courseList: Course[] = [];

  private readonly url = 'http://localhost:5000/Courses';

  //  get all courses
  getAllCourses():Promise<Course[]> {
    // return this.courseList;
    return axios.get(this.url).then((res)=>{
      return res.data;
    })
    .then((data)=>{
      return data;  
    })
    .catch((err)=>{
      return null;
    });
  }

  // add a course

  // createNewCourse(
  //   courseName: string,
  //   description: string,
  //   courseDuration: number,
  // ): Course {
  //   const newCourse: Course = {
  //     id: uuidv4(),
  //     courseName,
  //     description,
  //     courseDuration,
  //     status: CourseStatus.PLANNED,
  //   };
  //   this.courseList.push(newCourse);
  //   return newCourse;
  // }
  createNewCourse(newcoursedetails: CreateCourseDTO): string {
    try {
      const newCourse: Course = {
        id: uuidv4(),
        courseName: newcoursedetails.courseName,
        description: newcoursedetails.description,
        courseDuration: newcoursedetails.courseDuration,
        status: CourseStatus.PLANNED,
      };
      //this.courseList.push(newCourse);
      const res = axios.post(this.url, newCourse);
      if (res) {
        return 'Sucess';
      } else {
        return 'Failed';
      }
    } catch {
      return 'Failed';
    }
  }

  // get a course by Course Id
  getCourseById(id: string): Promise<Course> {
    // var findCourse = this.courseList.find((course) => course.id === id);
    // return findCourse;
    return axios.get(this.url + '/' + id).then((res)=>{
      return res.data;
    })
  }
  //  Delete the Course

  deleteCourse(id: string): void {
    // console.log(this.courseList.length);
    // this.courseList = this.courseList.filter((course) => course.id !== id);
    // console.log(this.courseList.length);
     axios.delete(this.url + '/' + id); 
  }

  // update course Status by ID

  updateStatus(id: string, status: CourseStatus): Promise<Course> {
    return axios.patch(this.url + '/' + id, { status: status }).then((res)=>{
      return res.data;
    })
  }
}