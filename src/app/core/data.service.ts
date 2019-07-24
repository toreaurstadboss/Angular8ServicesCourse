import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Reader } from 'app/models/reader';
import { allReaders, allBooks } from 'app/data';
import { BookTrackerError } from 'app/models/bookTrackerError';
import { catchError } from 'rxjs/operators';
import { Book } from 'app/models/book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mostPopularBook = allBooks[0];

  constructor(private loggerService: LoggerService, private http: HttpClient) { }

  getAllReaders(): Observable<Reader[] | BookTrackerError> {
    return this.http.get<Reader[]>('/api/readers')
    .pipe(
      catchError(this.handleError)
    );
  }

  getAuthorRecommendation(readerID: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (readerID > 0) {
          resolve('Dr. Seuss');
        } else {
          reject('Invalid reader ID');
        }
      }, 2000);
    });
  }

  private handleError(error: HttpErrorResponse): Observable<BookTrackerError> {
    const dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrieving data';
    return throwError(dataError);
  }

  setMostPopularBook(book: Book) {
    this.mostPopularBook = book;
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getBookByById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }
}
