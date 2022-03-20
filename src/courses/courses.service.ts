import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) // cria um repositório com base na entidade Course
    private readonly courseRepository: Repository<Course>
  ) {}

  async findAll() {
    return await this.courseRepository.find()
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne({ where: {id: +id} })

    if (!course) {
      throw new NotFoundException(`Course ${id} not found`)
    }

    return course
  }

  create(course: CreateCourseDto) {
    const curso = this.courseRepository.create(course)
    return this.courseRepository.save(curso)
  }

  async update(id: string, course: UpdateCourseDto) {
    const curso = await this.courseRepository.preload({
      ...course,
      id: +id
    })

    if (!curso) {
      throw new NotFoundException(`Course ${id} not found`)
    }

    return this.courseRepository.save(curso)
  }

  async remove(id: string) {
    const curso = await this.courseRepository.findOne({ where: {id: +id} })

    if (!curso) {
      throw new NotFoundException(`Course ${id} not found`)
    }

    return this.courseRepository.remove(curso)
  }
}
