import { AggregateRoot } from '../../../../../shared/domain/aggregateRoot';

export interface ProductProps {
   name: string;
   price: number;
   description: string;
   image: string;
}

export class Product extends AggregateRoot<ProductProps> {
   private constructor(props: ProductProps, id?: string) {
      super(props, id);
   }

   get name(): string {
      return this.props.name;
   }

   get price(): number {
      return this.props.price;
   }

   get description(): string {
      return this.props.description;
   }

   get image(): string {
      return this.props.image;
   }

   public static create(data: ProductProps, id?: string): Product {
      const product = new Product(data, id);

      return product;
   }

   public update(data: ProductProps): void {
      this.props.name = data.name;
      this.props.price = data.price;
      this.props.description = data.description;
      this.props.image = data.image;
   }
}
