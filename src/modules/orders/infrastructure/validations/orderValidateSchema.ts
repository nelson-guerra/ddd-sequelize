import { IsNotEmpty, IsInt, IsUUID, IsNumber, IsString, IsArray, ArrayMinSize } from 'class-validator';

class Items {
   @IsUUID()
   @IsString()
   product_id: string;

   @IsInt()
   quantity: number;

   @IsNumber({ maxDecimalPlaces: 2 })
   price: number;
}

export class CreateOrderValidateSchema {
   @IsNotEmpty({ message: 'User is required' })
   user_id: string;

   @IsNotEmpty({ message: 'Address is required' })
   address_id: string;

   @IsArray()
   @ArrayMinSize(1)
   items: Items[];
}

export class OrderIdValidateSchema {
   @IsNotEmpty({ message: 'Id is required' })
   @IsUUID(undefined, { message: 'Id is not UUID' })
   id: string;
}
