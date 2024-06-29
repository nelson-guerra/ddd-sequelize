import { AggregateRoot } from '../../../../../shared/domain/aggregateRoot';
import { OrderItem } from './orderItem';

export interface OrderProps {
   status: 'approved' | 'cancelled' | 'draft';
   user_id: string;
   items: OrderItem[];
   address: string;
   total_price: number;
   no: string;
}

export class Order extends AggregateRoot<OrderProps> {
   get status(): string {
      return this.props.status;
   }

   get user_id(): string {
      return this.props.user_id;
   }

   get items(): OrderItem[] {
      return this.props.items;
   }

   get address(): string {
      return this.props.address;
   }

   get total_price(): number {
      return this.props.total_price;
   }

   get no(): string {
      return this.props.no;
   }

   setAddress(address: string): void {
      this.props.address = address;
   }

   private constructor(props: OrderProps, id?: string) {
      super(props, id);
   }

   public static create(data: OrderProps, id?: string): Order {
      const product = new Order(data, id);

      return product;
   }
}
