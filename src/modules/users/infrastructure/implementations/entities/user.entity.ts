import { Table, Column, Model, PrimaryKey, IsUUID, DataType, Unique, HasMany } from 'sequelize-typescript';
import UserAddressEntity from './userAddress.entity';

@Table({
   tableName: 'users',
   timestamps: false,
})
export default class UserEntity extends Model {
   @IsUUID(4)
   @PrimaryKey
   @Column({
      type: DataType.STRING(255),
   })
   declare id: string;

   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare name: string;

   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare password: string;

   @Unique
   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare email: string;

   @HasMany(() => UserAddressEntity)
   declare addresses: UserAddressEntity[];
}
