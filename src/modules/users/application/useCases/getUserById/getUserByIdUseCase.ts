import { Either, success, failure } from '../../../../../shared/core/either';
import { UserRepositoryInterface } from '../../../domain/repositories/userRepositoryInterface';
import { User } from '../../../domain/entities/user/user';
import { UserErrors } from '../../errors/userErrors';

type Response = Either<UserErrors.UserNotRetrieve, User>;

export class GetUserByIdUseCase {
   constructor(private repository: UserRepositoryInterface) {}

   async execute(id: string): Promise<Response> {
      const product: User | null = await this.repository.getUserById(id);

      if (product === null) {
         return failure(new UserErrors.UserNotRetrieve());
      }

      return success(product);
   }
}
