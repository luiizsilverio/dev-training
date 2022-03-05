import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Fundamentos de NestJS",
      description: "Lorem ipsum",
      tags: ["node.js", "nestjs", "javascript"]
    }
  ]

  findAll() {
    return this.courses
  }

  findOne(id: string) {
    return this.courses.find((course: Course) => course.id === Number(id))
  }

  create(course) {
    this.courses.push(course)
  }

  update(id: string, course) {
    const idx = this.courses.findIndex((course: Course) => course.id === Number(id))

    if (idx >= 0) {
      this.courses[idx] = course
    }
  }

  remove(id: string) {
    const idx = this.courses.findIndex((course: Course) => course.id === Number(id))

    if (idx >= 0) {
      this.courses.splice(idx, 1)
    }
  }
}