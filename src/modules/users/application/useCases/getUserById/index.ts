import { GetUserByIdUseCase } from './getUserByIdUseCase';
import { userRepository } from '../../../infrastructure/implementations';
import { GetUserByController } from './getUserByIdController';

const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const getUserByController = new GetUserByController(getUserByIdUseCase);

export { getUserByController };
