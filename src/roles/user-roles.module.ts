import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { User } from 'src/users/users.model';
import { BelongsToMany } from 'sequelize';
import { Role } from './roles.model';
import {ForeignKey} from 'sequelize-typescript';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER})
  roleId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER})
  userId: number;
  
}
