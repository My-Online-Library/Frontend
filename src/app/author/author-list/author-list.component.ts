import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {

  
  constructor() { }
  @Input()
  authors;

  ngOnInit(): void {
    
  }

  remover(index: number): void {
    this.authors.splice(index, 1);
  }
}
