import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateProductValidateSchema {
   @IsNotEmpty({ message: 'Name is required' })
   name: string;

   @IsNotEmpty({ message: 'Price is required' })
   @IsNumber({ maxDecimalPlaces: 2 })
   price: number;

   @IsNotEmpty({ message: 'Description is required' })
   description: string;

   @IsNotEmpty({ message: 'image is required' })
   image: string;
}

export class UpdateProductValidateSchema {
   @IsNotEmpty({ message: 'Id is required' })
   @IsUUID(undefined, { message: 'Id is not UUID' })
   id: string;

   @IsNotEmpty({ message: 'Name is required' })
   name: string;

   @IsNotEmpty({ message: 'Price is required' })
   @IsNumber({ maxDecimalPlaces: 2 })
   price: number;

   @IsNotEmpty({ message: 'Description is required' })
   description: string;

   @IsNotEmpty({ message: 'image is required' })
   image: string;
}

export class ProductIdValidateSchema {
   @IsNotEmpty({ message: 'Id is required' })
   @IsUUID(undefined, { message: 'Id is not UUID' })
   id: string;
}
