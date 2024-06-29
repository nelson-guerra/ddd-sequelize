import { ProductRepositoryInterface } from '../../domain/repositories/productRepositoryInterface';
import { Product } from '../../domain/entities/product/product';
import { ProductMapper } from './mappers/productMapper';
import ProductEntity from './entities/product.entity';

export class ProductRepository implements ProductRepositoryInterface {
   private model = ProductEntity;

   public async getProductById(id: string): Promise<Product | null> {
      const product: ProductEntity | null = await this.model.findOne({ where: { id: id } });

      if (product) {
         return ProductMapper.toDomain(product);
      }

      return null;
   }

   public async getAllProducts(): Promise<Product[] | null> {
      const allData: ProductEntity[] = await this.model.findAll();

      if (allData) {
         return allData.map(data => ProductMapper.toDomain(data));
      }

      return null;
   }

   public async save(entry: Product): Promise<boolean> {
      try {
         const entryData = ProductMapper.toPersist(entry);
         const result = await this.model.create(entryData);

         if (!result.id) {
            throw new Error('Database error, failed to add record');
         }
      } catch (error) {
         return false;
      }

      return true;
   }

   public async update(id: string, entry: Product): Promise<boolean> {
      try {
         const entryData = ProductMapper.toPersist(entry);
         const result = await this.model.update(entryData, {
            where: {
               id: id,
            },
         });

         if (!result) {
            throw new Error('Database error, failed to update record');
         }
      } catch (error) {
         return false;
      }

      return true;
   }

   public async delete(id: string): Promise<boolean> {
      try {
         const result = await this.model.destroy({
            where: {
               id: id,
            },
         });

         if (!result) {
            throw new Error('Database error, failed to delete record');
         }
      } catch (error) {
         return false;
      }

      return true;
   }
}
