import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { DataService } from 'app/core/data.service';
import { LoggerService } from 'app/core/logger.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: [],
  providers: [DataService]
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,
    private dataService: DataService, private loggerService: LoggerService) { }

  ngOnInit() {
    const bookID: number = parseInt(this.route.snapshot.params['id'], 10);
    this.selectedBook = this.dataService.getBookByById(bookID);
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
    this.loggerService.log(`New most popular book: ${this.selectedBook.title}`);
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
