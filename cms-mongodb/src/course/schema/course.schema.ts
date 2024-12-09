import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { v4 as uuidv4 } from 'uuid';




export enum CourseStatus {
STARTED,
IN_PROGRESS,
COMPLETED,
}

@Schema({
timestamps: true,
collection: 'courses',
})


export class Course {
@Prop({
type: String,
unique: true,
default: function genUUID() {
return uuidv4();
},

})

id: string;
@Prop({
type: String,
unique: true,
})
name: string;

@Prop({
type: String,
required: true,
})
description: string;

@Prop({
type: Number,
})
price: number;

@Prop({
type: Number,
required: true,
})
duration: number;

@Prop()
status: CourseStatus;
}

export const CourseSchema= SchemaFactory.createForClass(Course)