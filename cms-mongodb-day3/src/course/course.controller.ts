import { Body, Controller, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course, CourseStatus } from './schema/course.schema';
import { CreateCourseDto } from './dto/create-course';
import { v4 as uuidv4 } from 'uuid';

@Controller('course')
export class CourseController {
  //add a service as a dependency
  constructor(private courseService: CourseService) {}
@Post()
    async addCourse(@Body() newcourse: CreateCourseDto): Promise<Course> {
        const course: Course = {
            id: uuidv4(),
            name: newcourse.name,
            description: newcourse.description,
            price: newcourse.price,
            duration: newcourse.duration,
            status: CourseStatus.STARTED
      }
    const res = await this.courseService.addCourse(course);
    return res;
  }
}