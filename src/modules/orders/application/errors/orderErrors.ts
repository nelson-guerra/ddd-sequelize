import { BadRequestException, InternalErrorException } from '../../../../shared/infrastructure/http/httpException';

export namespace OrderErrors {
   export class ValidationError extends BadRequestException {
      constructor(message: string) {
         super(message);
      }
   }

   export class OrderNotRetrieve extends InternalErrorException {
      constructor() {
         super(`Could not get the orders`);
      }
   }

   export class AddressNotFound extends BadRequestException {
      constructor() {
         super(`Address not found`);
      }
   }

   export class UserNotFound extends BadRequestException {
      constructor() {
         super(`User not found`);
      }
   }

   export class OrderNotSaved extends InternalErrorException {
      constructor() {
         super(`Order not saved`);
      }
   }
}
