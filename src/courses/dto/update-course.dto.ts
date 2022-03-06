import { PartialType } from "@nestjs/mapped-types"
import { CreateCourseDto } from "./create-course.dto"

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}

// É uma forma de dizer que as propriedades de CreateCourseDto são opcionais

