import { Product } from '../../../domain/entities/product/product';
import ProductEntity from '../entities/product.entity';

export class ProductMapper {
   public static toDomain(data: ProductEntity): Product {
      const product = Product.create(
         {
            name: data.name,
            price: data.price,
            description: data.description,
            image: data.image,
         },
         data.id,
      );

      return product;
   }

   public static toPersist(product: Product) {
      const data = {
         name: product.name,
         price: product.price,
         description: product.description,
         image: product.image,
         id: product.id,
      };

      return data;
   }
}
