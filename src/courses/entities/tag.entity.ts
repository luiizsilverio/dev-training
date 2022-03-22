import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  // Relacionamento ManytoMany():
  // O 1.o parâmetro é a entidade alvo (tabela relacionada)
  // O 2.o parâmetro é o campo da entidade alvo
  @ManyToMany(() => Course, (course: Course) => course.tags)
  courses: Course[]
}
