import { CreateOrderUseCase } from './createOrderUseCase';
import { orderRepository } from '../../../infrastructure/implementations';
import { CreateOrderController } from './createOrderController';
import { userAddressRepository } from '../../../../users/infrastructure/implementations';

const createOrderUseCase = new CreateOrderUseCase(orderRepository, userAddressRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };
