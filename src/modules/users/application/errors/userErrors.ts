import {
   BadRequestException,
   InternalErrorException,
   ConflictException,
} from '../../../../shared/infrastructure/http/httpException';

export namespace UserErrors {
   export class ValidationError extends BadRequestException {
      constructor(message: string) {
         super(message);
      }
   }

   export class EmailAlreadyExists extends ConflictException {
      constructor() {
         super(`The email has already been registered`);
      }
   }

   export class UserNotRetrieve extends InternalErrorException {
      constructor() {
         super(`Could not get the users`);
      }
   }

   export class UserNotFound extends BadRequestException {
      constructor() {
         super(`User not found`);
      }
   }

   export class UserNotSaved extends InternalErrorException {
      constructor() {
         super(`User not saved`);
      }
   }
}
