import { UserAddress } from '../../../domain/entities/userAddress/userAddress';
import UserAddressEntity from '../entities/userAddress.entity';

export class UserAddressMapper {
   public static toDomain(data: UserAddressEntity): UserAddress {
      const address = UserAddress.create(
         {
            user_id: data.user_id,
            city: data.city,
            address: data.address,
            zip: data.zip,
            contact_name: data.contact_name,
            contact_phone: data.contact_phone,
         },
         data.id,
      );

      return address;
   }

   public static toPersist(address: UserAddress) {
      const data = {
         user_id: address.user_id,
         city: address.city,
         address: address.address,
         zip: address.zip,
         contact_name: address.contact_name,
         contact_phone: address.contact_phone,
         id: address.id,
      };

      return data;
   }
}
