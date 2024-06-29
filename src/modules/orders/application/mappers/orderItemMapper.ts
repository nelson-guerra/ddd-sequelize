import { ResponseOrderItemDTO } from '../../domain/entities/order/dto/orderItemDTOs';
import { OrderItem } from '../../domain/entities/order/orderItem';

export class OrderItemMapper {
   static fromDomainToResponse(item: OrderItem): ResponseOrderItemDTO {
      const response: ResponseOrderItemDTO = {
         id: item.id,
         product_id: item.product_id,
         quantity: item.quantity,
         price: item.price,
      };

      return response;
   }
}
