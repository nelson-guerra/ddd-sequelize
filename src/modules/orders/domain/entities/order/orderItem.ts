import { Entity } from '../../../../../shared/domain/entity';

export interface OrderItemProps {
   product_id: string;
   quantity: number;
   price: number;
}

export class OrderItem extends Entity<OrderItemProps> {
   get product_id(): string {
      return this.props.product_id;
   }

   get price(): number {
      return this.props.price;
   }

   get quantity(): number {
      return this.props.quantity;
   }

   private constructor(props: OrderItemProps, id?: string) {
      super(props, id);
   }

   public static create(data: OrderItemProps, id?: string): OrderItem {
      const product = new OrderItem(data, id);

      return product;
   }
}
