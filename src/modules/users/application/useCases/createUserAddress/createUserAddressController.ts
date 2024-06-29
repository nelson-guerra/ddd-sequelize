import { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '../../../../../shared/infrastructure/http/httpResponse';
import { UserAddressErrors } from '../../errors/userAddressErrors';
import { CreateUserAddressUseCase } from './createUserAddressUseCase';
import { CreateUserAddressDTO } from '../../../domain/entities/userAddress/dto/userAddressDTOs';
import { CreateUserAddressValidateSchema } from '../../../infrastructure/validations/userAddressValidateSchema';
import { ValidateService } from '../../../../../shared/infrastructure/validate/validate.service';

export class CreateUserAddressController {
   constructor(private useCase: CreateUserAddressUseCase) {}

   async execute(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
      const data: CreateUserAddressDTO = {
         user_id: req.body.user_id,
         city: req.body.city,
         address: req.body.address,
         zip: req.body.zip,
         contact_name: req.body.contact_name,
         contact_phone: req.body.contact_phone,
      };

      const error = await ValidateService.validate(CreateUserAddressValidateSchema, data);
      if (error) {
         return next(new UserAddressErrors.ValidationError(error));
      }

      try {
         const result = await this.useCase.execute(data);
         if (result.isFailure()) {
            return next(result.value);
         }

         return HttpResponse.success(res, 'Successfully register address.', {});
      } catch (err) {
         return next(err);
      }
   }
}
