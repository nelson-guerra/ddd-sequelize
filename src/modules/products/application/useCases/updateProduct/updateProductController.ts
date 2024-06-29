import { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '../../../../../shared/infrastructure/http/httpResponse';
import { ProductErrors } from '../../errors/productErrors';
import { UpdateProductUseCase } from './updateProductUseCase';
import { UpdateProductDTO } from '../../../domain/entities/product/dto/productDTOs';
import { UpdateProductValidateSchema } from '../../../infrastructure/validations/productValidateSchema';
import { ValidateService } from '../../../../../shared/infrastructure/validate/validate.service';

export class UpdateProductController {
   constructor(private useCase: UpdateProductUseCase) {}

   async execute(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
      const { id } = req.params;
      const data: UpdateProductDTO = {
         name: req.body.name,
         price: req.body.price,
         description: req.body.description,
         image: req.body.image,
      };

      const error = await ValidateService.validate(UpdateProductValidateSchema, { ...data, id });
      if (error) {
         return next(new ProductErrors.ValidationError(error));
      }

      try {
         const result = await this.useCase.execute(id, data);
         if (result.isFailure()) {
            return next(result.value);
         }

         return HttpResponse.success(res, 'Successfully updated product.', { id: result.value });
      } catch (err) {
         return next(err);
      }
   }
}
