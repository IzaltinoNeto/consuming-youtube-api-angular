import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  
  @Output() search = new EventEmitter<string>();
  searchTerm = '';
  searched = false;
  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.searched = true;
    this.search.emit(this.searchTerm);
  }

}