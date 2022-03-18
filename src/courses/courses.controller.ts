import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common';
import { get } from 'http';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get( 'list' ) // GET /courses/list
  findAll() {
    return this.coursesService.findAll()
  }

  @Get(':id') // GET /courses/:id
  findOne(@Param() params) {
    return this.coursesService.findOne(params.id)
  }

  @Post() // POST /courses
  create(@Body() body: CreateCourseDto) {
    return this.coursesService.create(body)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body
  ) {
    return this.coursesService.update(id, body)
  }

  @Delete(':id') // GET /courses/:id
  remove(@Param() params) {
    return this.coursesService.remove(params.id)
  }

}
