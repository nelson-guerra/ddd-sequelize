import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateUserAddressValidateSchema {
   @IsUUID()
   @IsString()
   user_id: string;

   @IsNotEmpty({ message: 'City is required' })
   city: string;

   @IsNotEmpty({ message: 'Address is required' })
   address: string;

   @IsNotEmpty({ message: 'Zip is required' })
   zip: string;

   @IsNotEmpty({ message: 'Contact name is required' })
   contact_name: string;

   @IsNotEmpty({ message: 'Contact phone is required' })
   contact_phone: string;
}
