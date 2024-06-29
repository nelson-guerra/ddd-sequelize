import { AggregateRoot } from '../../../../../shared/domain/aggregateRoot';
import { UserAddress } from '../userAddress/userAddress';

export interface UserProps {
   name: string;
   password: string;
   email: string;
   addreses?: UserAddress[];
}

export class User extends AggregateRoot<UserProps> {
   get name(): string {
      return this.props.name;
   }

   get password(): string {
      return this.props.password;
   }

   get email(): string {
      return this.props.email;
   }

   get addreses(): UserAddress[] {
      return this.props.addreses as UserAddress[];
   }

   private constructor(props: UserProps, id?: string) {
      super(props, id);
   }

   public static create(data: UserProps, id?: string): User {
      const user = new User(data, id);

      return user;
   }
}
