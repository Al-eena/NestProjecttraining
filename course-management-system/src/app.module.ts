import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { DemoModule } from './demo/demo.module';
import { CourseModule } from './course/course.module';


@Module({
  imports: [ DemoModule, CourseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}