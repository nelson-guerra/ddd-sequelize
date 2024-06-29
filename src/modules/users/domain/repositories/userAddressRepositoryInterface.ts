import { UserAddress } from '../entities/userAddress/userAddress';

export interface UserAddressRepositoryInterface {
   getAddressById: (id: string) => Promise<UserAddress | null>;
   save: (address: UserAddress) => Promise<boolean>;
}
