// via classes or via interface (interface )

export interface Course {
  
    id: string;
    
    courseName: string;
    description: string;
    courseDuration: number;
    status: CourseStatus;
  }
  
  export enum CourseStatus {
    PLANNED = 'PLANNED',
    STARTED = 'STARTED',
    COMPLETED = 'COMPLETED',
  }