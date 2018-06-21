import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class Person extends Model<Person> {
  @Column
  name: string;
 
  @Column
  birthday: Date;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}