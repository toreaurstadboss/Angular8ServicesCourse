import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { PlainloggerService } from './plainlogger.service';
import { dataServiceFactory } from './data.service.factory';
import { throwIfAlreadyLoadeded } from './module-import-guard';
import { BookTrackerErrorHandlerService } from './book-tracker-error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataService,
    LoggerService,
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService}
    // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService] }
    // { provide: LoggerService, useValue: {
    //   log: (message) => console.log(`MESSAGE: ${message}`),
    //   error: (message) => console.error(`PROBLEM: ${message}`)
    // }}
    // { provide: LoggerService, useExisting: PlainloggerService}
  ],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoadeded(parentModule, 'CoreModule');

  }

 }
