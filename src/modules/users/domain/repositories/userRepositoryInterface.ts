import { User } from '../entities/user/user';

export interface UserRepositoryInterface {
   isEmailExists: (email: string) => Promise<boolean>;
   getUserById: (id: string) => Promise<User | null>;
   save: (user: User) => Promise<boolean>;
}
