import { Table, Column, Model, PrimaryKey, IsUUID, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import UserEntity from './user.entity';

@Table({
   tableName: 'user_addresses',
   timestamps: false,
})
export default class UserAddressEntity extends Model {
   @IsUUID(4)
   @PrimaryKey
   @Column({
      type: DataType.STRING(255),
   })
   declare id: string;

   @ForeignKey(() => UserEntity)
   @Column({ allowNull: false })
   declare user_id: string;

   @BelongsTo(() => UserEntity)
   declare user: UserEntity;

   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare city: string;

   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare address: string;

   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare zip: string;

   @Column({
      type: DataType.STRING(100),
   })
   declare contact_name: string;

   @Column({
      type: DataType.STRING(100),
   })
   declare contact_phone: string;
}
