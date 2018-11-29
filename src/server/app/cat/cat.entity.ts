import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('cat')
export class Cat {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;
}
