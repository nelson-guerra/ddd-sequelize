import { UserRepository } from './userRepository';
import { UserAddressRepository } from './userAddressRepository';

const userRepository = new UserRepository();
const userAddressRepository = new UserAddressRepository();

export { userRepository, userAddressRepository };
