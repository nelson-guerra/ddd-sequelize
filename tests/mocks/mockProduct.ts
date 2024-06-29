import { faker } from '@faker-js/faker';
import { CreateProductDTO } from '../../src/modules/products/domain/entities/product/dto/productDTOs';

export const mockProduct = (): CreateProductDTO => ({
   name: faker.commerce.product(),
   price: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
   description: faker.commerce.productDescription(),
   image: 'image.png',
});
