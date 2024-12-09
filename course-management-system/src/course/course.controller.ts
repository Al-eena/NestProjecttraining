import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course, CourseStatus } from './course.model';
import { CreateCourseDTO } from './dto/create-course-dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  //create a get all Course routing Endpoints
  @Get()
  getAllCourse():Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  // Get Course BY Id
  @Get(':id')
  getCourseById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string):Promise<Course> {
    return this.courseService.getCourseById(id);
  }


  @Post()
  addNewCourse(@Body() courseDetails:CreateCourseDTO ):string {
    return this.courseService.createNewCourse(courseDetails);
  }
  @Delete(":id")
  removeCourese(@Param("id") id:string)
  {
    this.courseService.deleteCourse(id);
  }

  @Patch(":id")
  updateCourseStatus(@Param("id") id:string, @Body("status") status:CourseStatus)
  {
    return this.courseService.updateStatus(id,status);
  }
}