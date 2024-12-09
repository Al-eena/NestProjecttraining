import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransFormInterceptor } from './transforms/transform.interceptors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  validations are used to validate the data
  app.useGlobalPipes(new ValidationPipe());
  // need some which will extract fron some other data
  app.useGlobalInterceptors(new TransFormInterceptor());
  //Swagger middleware , to generate EPI endpoints via UI

  const config= new DocumentBuilder()
  .setTitle('COurse-Management-System')
  .setDescription("For creating or managing Course")
  .setVersion('1.0').addTag('Course').build();

  const documentBuilder= SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,documentBuilder);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();