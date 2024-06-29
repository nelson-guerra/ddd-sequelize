import { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '../../../../../shared/infrastructure/http/httpResponse';
import { GetUserByIdUseCase } from './getUserByIdUseCase';
import { UserIdValidateSchema } from '../../../infrastructure/validations/userValidateSchema';
import { ValidateService } from '../../../../../shared/infrastructure/validate/validate.service';
import { UserMapper } from '../../mappers/userMapper';
import { UserErrors } from '../../errors/userErrors';

export class GetUserByController {
   constructor(private useCase: GetUserByIdUseCase) {}

   async execute(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
      const { id } = req.params;

      const error = await ValidateService.validate(UserIdValidateSchema, { id });
      if (error) {
         return next(new UserErrors.ValidationError(error));
      }

      try {
         const result = await this.useCase.execute(id);

         if (result.isFailure()) {
            return next(result.value);
         }

         const response = UserMapper.fromDomainToResponse(result.value);

         return HttpResponse.success(res, 'Successfully obtained users.', response);
      } catch (err) {
         return next(err);
      }
   }
}
