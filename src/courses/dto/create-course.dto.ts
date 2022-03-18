import { IsDecimal, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCourseDto {
  // readonly name: string
  // readonly description: string
  // readonly price: number
  // readonly tags: string[]

  @IsNumber()
  readonly id: number

  @IsString()
  readonly name: string

  // @IsOptional()
  @IsString()
  readonly description: string

  @IsNumber()
  readonly price: number

  @IsString({ each: true })
  readonly tags: string[]
}
