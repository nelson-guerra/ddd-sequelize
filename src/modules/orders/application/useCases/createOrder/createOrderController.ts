import { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '../../../../../shared/infrastructure/http/httpResponse';
import { OrderErrors } from '../../errors/orderErrors';
import { CreateOrderUseCase } from './createOrderUseCase';
import { CreateOrderDTO } from '../../../domain/entities/order/dto/orderDTOs';
import { CreateOrderValidateSchema } from '../../../infrastructure/validations/orderValidateSchema';
import { ValidateService } from '../../../../../shared/infrastructure/validate/validate.service';

export class CreateOrderController {
   constructor(private useCase: CreateOrderUseCase) {}

   async execute(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
      const data: CreateOrderDTO = {
         user_id: req.body.user_id,
         address_id: req.body.address_id,
         items: req.body.items,
      };

      const error = await ValidateService.validate(CreateOrderValidateSchema, data);
      if (error) {
         return next(new OrderErrors.ValidationError(error));
      }

      try {
         const result = await this.useCase.execute(data);
         if (result.isFailure()) {
            return next(result.value);
         }

         return HttpResponse.success(res, 'Successfully created Order.', { id: result.value });
      } catch (err) {
         return next(err);
      }
   }
}
