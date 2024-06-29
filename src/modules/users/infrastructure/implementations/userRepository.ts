import { UserRepositoryInterface } from '../../domain/repositories/userRepositoryInterface';
import { User } from '../../domain/entities/user/user';
import { UserMapper } from './mappers/userMapper';
import UserEntity from './entities/user.entity';

export class UserRepository implements UserRepositoryInterface {
   private model = UserEntity;

   public async isEmailExists(email: string): Promise<boolean> {
      const entity: UserEntity | null = await this.model.findOne({ where: { email: email } });

      if (entity) {
         return true;
      }

      return false;
   }

   public async getUserById(id: string): Promise<User | null> {
      const entity: UserEntity | null = await this.model.findOne({ where: { id: id }, include: ['addresses'] });

      if (entity) {
         return UserMapper.toDomain(entity);
      }

      return null;
   }

   public async save(entry: User): Promise<boolean> {
      try {
         const entryData = UserMapper.toPersist(entry);
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
