import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) // cria um repositório com base na entidade Course
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag) // repositório da entidade relacionada
    private readonly tagRepository: Repository<Tag>
  ) {}

  async findAll() {
    // return await this.courseRepository.find()
    return await this.courseRepository.find({ relations: ['tags'] })
  }

  async findOne(id: string) {
    // const course = await this.courseRepository.findOne({ where: {id: +id} })
    const course = await this.courseRepository
      .findOne({ where: { id: +id }, relations: ['tags'] })

    if (!course) {
      throw new NotFoundException(`Course ${id} not found`)
    }

    return course
  }

  async create(course: CreateCourseDto) {
    const tags = await Promise.all(
      course.tags.map(name => this.preloadTagByName(name))
    )

    const curso = this.courseRepository.create({
      ...course,
      tags
    })

    return this.courseRepository.save(curso)
  }

  async update(id: string, course: UpdateCourseDto) {
    const tags = course.tags && (
      await Promise.all(
        course.tags.map(name => this.preloadTagByName(name))
      )
    )

    const curso = await this.courseRepository.preload({
      ...course,
      id: +id,
      tags
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

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ where: { name }})

    if (tag) {
      return tag
    }

    return this.tagRepository.create({ name })
  }
}
