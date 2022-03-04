import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common';
import { get } from 'http';

@Controller('courses')
export class CoursesController {

  @Get( 'list' ) // GET /courses/list
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos')
  }

  @Get(':id') // GET /courses/:id
  findOne(@Param() params) {
    return `Curso #${params.id}`
  }

  @Post() // POST /courses
  @HttpCode(204)  // ou @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body.name
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body
  ) {
    return `Atualização do Curso #${id}`
  }

  @Delete(':id') // GET /courses/:id
  remove(@Param() params) {
    return `Exclusão do Curso #${params.id}`
  }

}
