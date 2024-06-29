import supertest from 'supertest';
import { app } from '../../src/app';
import { DatabaseBootstrap } from '../../src/bootstrap/database';
import { CreateUserDTO } from '../../src/modules/users/domain/entities/user/dto/userDTOs';
import { HttpStatusCode } from '../../src/shared/infrastructure/http/httpStatusCode';
import { mockUser } from '../mocks/mockUser';

const database = new DatabaseBootstrap();
const server = supertest(app);

describe('Users', () => {
   beforeAll(async () => {
      await database.initialize();
   });

   afterAll(() => {
      database.close();
   });

   it('[200::OK] create user', async () => {
      const request: CreateUserDTO = mockUser();
      const result = await server.post('/api/v1/users').send(request);

      expect(result.statusCode).toEqual(HttpStatusCode.SUCCESS);
   });
});
