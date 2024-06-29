import { UserAddressRepositoryInterface } from '../../domain/repositories/userAddressRepositoryInterface';
import { UserAddress } from '../../domain/entities/userAddress/userAddress';
import { UserAddressMapper } from './mappers/userAddressMapper';
import UserAddressEntity from './entities/userAddress.entity';

export class UserAddressRepository implements UserAddressRepositoryInterface {
   private model = UserAddressEntity;

   public async getAddressById(id: string): Promise<UserAddress | null> {
      const entity: UserAddressEntity | null = await this.model.findOne({ where: { id: id } });

      if (entity) {
         return UserAddressMapper.toDomain(entity);
      }

      return null;
   }

   public async save(entry: UserAddress): Promise<boolean> {
      try {
         const entryData = UserAddressMapper.toPersist(entry);
         const result = await this.model.create(entryData);
         if (!result.id) {
            throw new Error('Database error, failed to add record');
         }
      } catch (error) {
         return false;
      }

      return true;
   }
}
