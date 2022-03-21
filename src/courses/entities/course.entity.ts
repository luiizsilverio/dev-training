import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tag.entity"

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  // @Column('json', {nullable: true})  // campo tipo json
  // tags: string[]

  // A entidade principal da relação recebe @JoinTable()
  // Relacionamento ManytoMany()
  // O 1.o parâmetro é a entidade alvo (tabela relacionada)
  // O 2.o parâmetro é o campo da entidade alvo
  // O 3.o parâmetro são as opções do relacionamento
  @JoinTable()
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {cascade: true})
  tags: Tag[]
}