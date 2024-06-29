import { AggregateRoot } from '../../../../../shared/domain/aggregateRoot';

export interface UserAddressProps {
   user_id: string;
   city: string;
   address: string;
   zip: string;
   contact_name: string;
   contact_phone: string;
}

export class UserAddress extends AggregateRoot<UserAddressProps> {
   get user_id(): string {
      return this.props.user_id;
   }
   get city(): string {
      return this.props.city;
   }

   get address(): string {
      return this.props.address;
   }

   get zip(): string {
      return this.props.zip;
   }

   get contact_name(): string {
      return this.props.contact_name;
   }

   get contact_phone(): string {
      return this.props.contact_phone;
   }

   private constructor(props: UserAddressProps, id?: string) {
      super(props, id);
   }

   get getFullAddress(): string {
      return `${this.city} ${this.address}`;
   }

   public static create(data: UserAddressProps, id?: string): UserAddress {
      const address = new UserAddress(data, id);

      return address;
   }
}
