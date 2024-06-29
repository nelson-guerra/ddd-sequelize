import { Either, success, failure } from '../../../../../shared/core/either';
import { ProductRepositoryInterface } from '../../../domain/repositories/productRepositoryInterface';
import { Product } from '../../../domain/entities/product/product';
import { ProductErrors } from '../../errors/productErrors';

type Response = Either<ProductErrors.ProductNotRetrieve, Product[]>;

export class GetAllProductsUseCase {
   constructor(private repository: ProductRepositoryInterface) {}

   async execute(): Promise<Response> {
      const products: Product[] | null = await this.repository.getAllProducts();
      if (products === null) {
         return failure(new ProductErrors.ProductNotRetrieve());
      }

      return success(products);
   }
}
