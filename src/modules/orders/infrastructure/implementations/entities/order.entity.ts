import {
   Table,
   Column,
   Model,
   PrimaryKey,
   IsUUID,
   DataType,
   ForeignKey,
   BelongsTo,
   HasMany,
} from 'sequelize-typescript';
import UserEntity from '../../../../users/infrastructure/implementations/entities/user.entity';
import OrderItemEntity from './orderItem.entity';

@Table({
   tableName: 'orders',
   timestamps: false,
})
export default class OrderEntity extends Model {
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
   declare no: string;

   @Column({
      type: DataType.STRING(100),
      allowNull: false,
   })
   declare status: string;

   @ForeignKey(() => UserEntity)
   @Column({ allowNull: false })
   declare user_id: string;

   @BelongsTo(() => UserEntity)
   declare user: UserEntity;

   @HasMany(() => OrderItemEntity)
   declare items: OrderItemEntity[];

   @Column({
      type: DataType.STRING(255),
      allowNull: false,
   })
   declare address: string;

   @Column({
      type: DataType.FLOAT(10, 2),
      allowNull: false,
   })
   declare total_price: number;
}
