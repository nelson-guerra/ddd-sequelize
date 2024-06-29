import { faker } from '@faker-js/faker';
import { CreateUserDTO } from '../../src/modules/users/domain/entities/user/dto/userDTOs';

export const mockUser = (): CreateUserDTO => ({
   name: faker.person.firstName(),
   email: faker.internet.email().toLowerCase(),
   password: faker.internet.password(),
});
