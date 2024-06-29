import { Either, success, failure } from '../../../../../shared/core/either';
import { OrderRepositoryInterface } from '../../../domain/repositories/orderRepositoryInterface';
import { UserRepositoryInterface } from '../../../../users/domain/repositories/userRepositoryInterface';
import { Order } from '../../../domain/entities/order/order';
import { OrderErrors } from '../../errors/orderErrors';

type Response = Either<OrderErrors.UserNotFound | OrderErrors.OrderNotRetrieve, Order[]>;

export class GetOrderByUserUseCase {
   constructor(
      private orderRepository: OrderRepositoryInterface,
      private userRepository: UserRepositoryInterface,
   ) {}

   async execute(id: string): Promise<Response> {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
         return failure(new OrderErrors.UserNotFound());
      }

      const orders: Order[] | null = await this.orderRepository.getOrdersByUser(id);

      if (orders === null) {
         return failure(new OrderErrors.OrderNotRetrieve());
      }

      return success(orders);
   }
}
