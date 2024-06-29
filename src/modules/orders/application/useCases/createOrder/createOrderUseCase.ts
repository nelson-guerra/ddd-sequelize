import { Either, success, failure } from '../../../../../shared/core/either';
import { OrderRepositoryInterface } from '../../../domain/repositories/orderRepositoryInterface';
import { UserAddressRepositoryInterface } from '../../../../users/domain/repositories/userAddressRepositoryInterface';
import { Order } from '../../../domain/entities/order/order';
import { OrderItem } from '../../../domain/entities/order/orderItem';
import { OrderErrors } from '../../errors/orderErrors';
import { CreateOrderDTO } from '../../../domain/entities/order/dto/orderDTOs';

type Response = Either<OrderErrors.AddressNotFound | OrderErrors.OrderNotSaved, string>;

export class CreateOrderUseCase {
   constructor(
      private orderRepository: OrderRepositoryInterface,
      private userAddressRepository: UserAddressRepositoryInterface,
   ) {}

   async execute(data: CreateOrderDTO): Promise<Response> {
      const { user_id, address_id, items } = data;

      const userAddress = await this.userAddressRepository.getAddressById(address_id);
      if (!userAddress) {
         return failure(new OrderErrors.AddressNotFound());
      }

      const no = (Math.floor(Math.random() * 6) + 1).toString().padStart(10, '0');
      const total_price = items
         .map(item => item.price)
         .reduce((accumulator, currentValue) => accumulator + currentValue);
      const orderItems = items.map(item =>
         OrderItem.create({ product_id: item.product_id, quantity: item.quantity, price: item.price }),
      );

      const order = Order.create({
         user_id,
         no,
         status: 'draft',
         address: userAddress.getFullAddress,
         items: orderItems,
         total_price,
      });

      const saved = await this.orderRepository.save(order);
      if (!saved) {
         return failure(new OrderErrors.OrderNotSaved());
      }

      return success(order.id);
   }
}
