import { Table, Column, Model, PrimaryKey, IsUUID, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import ProductEntity from '../../../../products/infrastructure/implementations/entities/product.entity';
import OrderEntity from './order.entity';

@Table({
   tableName: 'order_items',
   timestamps: false,
})
export default class OrderItemEntity extends Model {
   @IsUUID(4)
   @PrimaryKey
   @Column({
      type: DataType.STRING(255),
   })
   declare id: string;

   @ForeignKey(() => ProductEntity)
   @Column({ allowNull: false })
   declare product_id: string;

   @BelongsTo(() => ProductEntity)
   declare product: ProductEntity;

   @ForeignKey(() => OrderEntity)
   @Column({ allowNull: false })
   declare order_id: string;

   @BelongsTo(() => OrderEntity)
   declare order: OrderEntity;

   @Column({
      type: DataType.INTEGER,
      allowNull: false,
   })
   declare quantity: number;

   @Column({
      type: DataType.FLOAT(10, 2),
      allowNull: false,
   })
   declare price: number;
}
