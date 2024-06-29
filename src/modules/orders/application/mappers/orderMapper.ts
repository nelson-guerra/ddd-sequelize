import { ResponseOrderDTO } from '../../domain/entities/order/dto/orderDTOs';
import { Order } from '../../domain/entities/order/order';
import { OrderItemMapper } from './orderItemMapper';

export class OrderMapper {
   static fromDomainToResponse(order: Order): ResponseOrderDTO {
      const response: ResponseOrderDTO = {
         id: order.id,
         no: order.no,
         user_id: order.user_id,
         status: order.status,
         address: order.address,
         items: order.items.map(item => OrderItemMapper.fromDomainToResponse(item)),
      };

      return response;
   }
}
