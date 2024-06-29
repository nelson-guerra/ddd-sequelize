import { BadRequestException, InternalErrorException } from '../../../../shared/infrastructure/http/httpException';

export namespace ProductErrors {
   export class ValidationError extends BadRequestException {
      constructor(message: string) {
         super(message);
      }
   }

   export class ProductNotRetrieve extends InternalErrorException {
      constructor() {
         super(`Could not get the products`);
      }
   }

   export class ProductNotFound extends BadRequestException {
      constructor() {
         super(`Product not found`);
      }
   }

   export class ProductNotSaved extends InternalErrorException {
      constructor() {
         super(`Product not saved`);
      }
   }

   export class ProductNotUpdated extends InternalErrorException {
      constructor() {
         super(`Product not updated`);
      }
   }

   export class ProductNotDeleted extends InternalErrorException {
      constructor() {
         super(`Product not removed`);
      }
   }
}
