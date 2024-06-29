import { User } from '../../../../../src/modules/users/domain/entities/user/user';
import { mockUser } from '../../../../mocks/mockUser';

describe('Create User', () => {
   it('should create a valid user', () => {
      const result = User.create(mockUser());

      expect(result).toBeInstanceOf(User);
   });
});
