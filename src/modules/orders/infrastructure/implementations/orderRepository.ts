import { OrderRepositoryInterface } from '../../domain/repositories/orderRepositoryInterface';
import { Order } from '../../domain/entities/order/order';
import { OrderMapper } from './mappers/orderMapper';
import OrderEntity from './entities/order.entity';
import OrderItemEntity from './entities/orderItem.entity';

export class OrderRepository implements OrderRepositoryInterface {
   private model = OrderEntity;

   public async getOrderById(id: string): Promise<Order | null> {
      const order: OrderEntity | null = await this.model.findOne({ where: { id: id } });

      if (order) {
         return OrderMapper.toDomain(order);
      }

      return null;
   }

   public async getOrdersByUser(id: string): Promise<Order[] | null> {
      const allData: OrderEntity[] = await this.model.findAll({ where: { user_id: id }, include: ['items'] });

      if (allData) {
         return allData.map(data => OrderMapper.toDomain(data));
      }

      return null;
   }

   public async save(entry: Order): Promise<boolean> {
      try {
         const entryData = OrderMapper.toPersist(entry);
         const result = await this.model.create(entryData, {
            include: [{ model: OrderItemEntity }],
         });

         if (!result.id) {
            throw new Error('Database error, failed to add record');
         }
      } catch (error) {
         return false;
      }

      return true;
   }
}
