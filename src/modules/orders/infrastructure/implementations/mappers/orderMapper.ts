import { Order } from '../../../domain/entities/order/order';
import { OrderItem } from '../../../domain/entities/order/orderItem';
import OrderEntity from '../entities/order.entity';

export class OrderMapper {
   public static toDomain(data: OrderEntity): Order {
      const items = data.items.map(item =>
         OrderItem.create(
            {
               product_id: item.product_id,
               quantity: item.quantity,
               price: item.price,
            },
            item.id,
         ),
      );

      const product = Order.create(
         {
            status: 'draft',
            user_id: data.user_id,
            items: items,
            address: data.address,
            total_price: data.total_price,
            no: data.no,
         },
         data.id,
      );

      return product;
   }

   public static toPersist(order: Order) {
      const data = {
         status: order.status,
         user_id: order.user_id,
         items: order.items.map(item => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
            product_id: item.product_id,
         })),
         address: order.address,
         total_price: order.total_price,
         no: order.no,
         id: order.id,
      };

      return data;
   }
}
