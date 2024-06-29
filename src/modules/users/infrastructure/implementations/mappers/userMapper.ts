import { User } from '../../../domain/entities/user/user';
import { UserAddress } from '../../../domain/entities/userAddress/userAddress';
import UserEntity from '../entities/user.entity';

export class UserMapper {
   public static toDomain(data: UserEntity): User {
      const addresses = data.addresses.map(item =>
         UserAddress.create(
            {
               user_id: item.user_id,
               city: item.city,
               address: item.address,
               zip: item.zip,
               contact_name: item.contact_name,
               contact_phone: item.contact_phone,
            },
            item.id,
         ),
      );

      const user = User.create(
         {
            name: data.name,
            password: data.password,
            email: data.email,
            addreses: addresses,
         },
         data.id,
      );

      return user;
   }

   public static toPersist(user: User) {
      const data = {
         name: user.name,
         password: user.password,
         email: user.email,
         id: user.id,
      };

      return data;
   }
}
