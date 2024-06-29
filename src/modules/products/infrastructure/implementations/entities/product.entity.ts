import { Table, Column, Model, PrimaryKey, IsUUID, DataType } from 'sequelize-typescript';

@Table({
   tableName: 'products',
   timestamps: false,
})
export default class ProductEntity extends Model {
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
      type: DataType.FLOAT(10, 2),
      allowNull: false,
   })
   declare price: number;

   @Column({
      type: DataType.STRING(255),
      allowNull: false,
   })
   declare description: string;

   @Column({
      type: DataType.STRING(255),
   })
   declare image: string;
}
