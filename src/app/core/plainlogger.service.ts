import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class PlainloggerService implements LoggerService {
  log(message: string): void {
    console.log(message);
  }
  error(message: string): void {
    console.error(message);
  }

  constructor() { }
}
