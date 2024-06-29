import { BadRequestException, InternalErrorException } from '../../../../shared/infrastructure/http/httpException';

export namespace UserAddressErrors {
   export class ValidationError extends BadRequestException {
      constructor(message: string) {
         super(message);
      }
   }

   export class UserAddressNotSaved extends InternalErrorException {
      constructor() {
         super(`Address not saved`);
      }
   }
}
