import { Injectable, ErrorHandler } from '@angular/core';
import { BookTrackerError } from 'app/models/bookTrackerError';

@Injectable()
export class BookTrackerErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const customError: BookTrackerError = new BookTrackerError();
    customError.errorNumber = 200;
    customError.message = (<Error>error).message;
    customError.friendlyMessage = 'An error occured. Please try again';
    console.log(customError);
  }

  constructor() { }
}
