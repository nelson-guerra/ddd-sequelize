import { IsEmail, MinLength, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateUserValidateSchema {
   @IsNotEmpty({ message: 'Name is required' })
   name: string;

   @MinLength(4, {
      message: 'Password is too short. Minimal length is $constraint1 characters, but actual is $value',
   })
   @IsString()
   @IsNotEmpty({ message: 'Password is required' })
   password: string;

   @IsEmail({}, { message: 'Email is invalid' })
   @IsNotEmpty({ message: 'Email is required' })
   email: string;
}

export class UserIdValidateSchema {
   @IsNotEmpty({ message: 'Id is required' })
   @IsUUID(undefined, { message: 'Id is not UUID' })
   id: string;
}
