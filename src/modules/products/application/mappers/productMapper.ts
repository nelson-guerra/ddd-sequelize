import { ResponseProductDTO } from '../../domain/entities/product/dto/productDTOs';
import { Product } from '../../domain/entities/product/product';

export class ProductMapper {
   static fromDomainToResponse(product: Product): ResponseProductDTO {
      const response: ResponseProductDTO = {
         id: product.id,
         name: product.name,
         price: product.price,
         description: product.description,
         image: product.image,
      };

      return response;
   }
}
