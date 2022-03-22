import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { v4 as uuid } from 'uuid'

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  // Relacionamento ManytoMany():
  // O 1.o parâmetro é a entidade alvo (tabela relacionada)
  // O 2.o parâmetro é o campo da entidade alvo
  @ManyToMany(() => Course, (course: Course) => course.tags)
  courses: Course[]

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return
    }
    this.id = uuid()
  }
}
