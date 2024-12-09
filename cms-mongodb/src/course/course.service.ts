import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import mongoose from 'mongoose';
  import { Course, CourseStatus } from './schema/course.schema';
  import { InjectModel } from '@nestjs/mongoose';
  import { Observable } from 'rxjs';
  
  
  @Injectable()
  export class CourseService {
    
    constructor(
      @InjectModel(Course.name)
      private courseModel: mongoose.Model<Course>,
    ) {}
  
    
    async addCourse(newcourse: Course): Promise<Course> {

      try {
        const existingCourse = await this.courseModel.findOne({
          name: newcourse.name,
        });
        if (existingCourse) {
          throw new ConflictException('Course already exist');
        } else {
          const res = await this.courseModel.create(newcourse);
          return res;
        }
      } catch (err) {
        throw new InternalServerErrorException(err.message);
      }
    }
   
    async getAllCourses(): Promise<Course[]> {
      const res = await this.courseModel.find();
      return res;
    }
    
    async getCourseById(id: string): Promise<Course> {
      const res = await this.courseModel.findOne({
        id: id,
      });
      if (res) {
        return res;
      } else {
        throw new NotFoundException('Course not found');
      }
    }
  
   
    async getCourseByPrice(sprice: number): Promise<Course[]> {
      const res = await this.courseModel.find({
        price: sprice,
      });
      return res;
    }
   
    async updateCourseStatus(id: string, status: CourseStatus): Promise<string> {
      const res = await this.courseModel.findOneAndUpdate(
        { id: id }, 
        { status: status }, 
      );
      if (!res) {
        return 'Course not found';
      } else {
        return 'Updated Successfully';
      }
    }
  
    async updateprocebyCiurseId(id: string, price: number): Promise<string> {
      const res = await this.courseModel.findOneAndUpdate(
        { id: id }, 
        { price: price }, 
      );
      if (!res) {
        throw new NotFoundException('Course not found');
      } else {
        return 'Updated Successfully';
      }
    }
  
    
    async deleteCourse(id: string): Promise<string> {
      const res = await this.courseModel.findOneAndDelete({ id: id });
      if (!res) {
        throw new NotFoundException('Course not found');
      } else {
        return 'Deleted Successfully';
      }
    }
  }