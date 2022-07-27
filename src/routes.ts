import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response:Response) {
  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Dani",
    duration: 3000,
  })

  CreateCourseService.execute({
    name: "React",
    educator: "Diego",
    
  })

  return response.send();
}