import { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '../../../../../shared/infrastructure/http/httpResponse';
import { OrderErrors } from '../../errors/orderErrors';
import { GetOrderByUserUseCase } from './getOrderByUserUseCase';
import { OrderIdValidateSchema } from '../../../infrastructure/validations/orderValidateSchema';
import { ValidateService } from '../../../../../shared/infrastructure/validate/validate.service';
import { OrderMapper } from '../../mappers/orderMapper';

export class GetOrderByUserController {
   constructor(private useCase: GetOrderByUserUseCase) {}

   async execute(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
      const { id } = req.params;

      const error = await ValidateService.validate(OrderIdValidateSchema, { id });
      if (error) {
         return next(new OrderErrors.ValidationError(error));
      }

      try {
         const result = await this.useCase.execute(id);

         if (result.isFailure()) {
            return next(result.value);
         }

         const response = result.value.map(order => OrderMapper.fromDomainToResponse(order));

         return HttpResponse.success(res, 'Successfully retrive Orders.', response);
      } catch (err) {
         return next(err);
      }
   }
}
