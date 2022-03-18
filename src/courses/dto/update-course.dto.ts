import { PartialType } from "@nestjs/mapped-types"
import { CreateCourseDto } from "./create-course.dto"

// export class UpdateCourseDto {
//   readonly name?: string
//   readonly description?: string
//   readonly price?: number
//   readonly tags?: string[]
// }

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}

// É uma forma de dizer que as propriedades de CreateCourseDto são opcionais
