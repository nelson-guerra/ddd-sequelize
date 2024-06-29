import { ResponseUserDTO } from '../../domain/entities/user/dto/userDTOs';
import { User } from '../../domain/entities/user/user';
import { UserAddressMapper } from './userAddressMapper';

export class UserMapper {
   static fromDomainToResponse(user: User): ResponseUserDTO {
      const response: ResponseUserDTO = {
         id: user.id,
         name: user.name,
         password: user.password,
         email: user.email,
         addreses: user.addreses.map(address => UserAddressMapper.fromDomainToResponse(address)),
      };

      return response;
   }
}
