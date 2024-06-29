import { ResponseUserAddressDTO } from '../../domain/entities/userAddress/dto/userAddressDTOs';
import { UserAddress } from '../../domain/entities/userAddress/userAddress';

export class UserAddressMapper {
   static fromDomainToResponse(address: UserAddress): ResponseUserAddressDTO {
      const response: ResponseUserAddressDTO = {
         id: address.id,
         user_id: address.user_id,
         city: address.city,
         address: address.address,
         zip: address.zip,
         contact_name: address.contact_name,
         contact_phone: address.contact_phone,
      };

      return response;
   }
}
