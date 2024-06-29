import { CreateUserAddressUseCase } from './createUserAddressUseCase';
import { userAddressRepository } from '../../../infrastructure/implementations';
import { CreateUserAddressController } from './createUserAddressController';

const createUserAddressUseCase = new CreateUserAddressUseCase(userAddressRepository);
const createUserAddressController = new CreateUserAddressController(createUserAddressUseCase);

export { createUserAddressController };
