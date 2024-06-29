import { GetOrderByUserUseCase } from './getOrderByUserUseCase';
import { orderRepository } from '../../../infrastructure/implementations';
import { GetOrderByUserController } from './getOrderByUserController';
import { userRepository } from '../../../../users/infrastructure/implementations';

const getOrderByUserUseCase = new GetOrderByUserUseCase(orderRepository, userRepository);
const getOrderByUserController = new GetOrderByUserController(getOrderByUserUseCase);

export { getOrderByUserController };
