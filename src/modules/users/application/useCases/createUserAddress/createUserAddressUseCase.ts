import { Either, success, failure } from '../../../../../shared/core/either';
import { UserAddressRepositoryInterface } from '../../../domain/repositories/userAddressRepositoryInterface';
import { UserAddress } from '../../../domain/entities/userAddress/userAddress';
import { UserAddressErrors } from '../../errors/userAddressErrors';
import { CreateUserAddressDTO } from '../../../domain/entities/userAddress/dto/userAddressDTOs';

type Response = Either<UserAddressErrors.UserAddressNotSaved, string>;

export class CreateUserAddressUseCase {
   constructor(private repository: UserAddressRepositoryInterface) {}

   async execute(data: CreateUserAddressDTO): Promise<Response> {
      const address = UserAddress.create(data);

      const saved = await this.repository.save(address);
      if (!saved) {
         return failure(new UserAddressErrors.UserAddressNotSaved());
      }

      return success(address.id);
   }
}
