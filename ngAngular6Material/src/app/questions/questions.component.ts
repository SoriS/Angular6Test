import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnChanges {
  Row = {  name: '' };
  categories: Questions[] = [
    {
      name: 'Модель невивідності',
      questions: <PeriodicElement[]>[
        {  name: 'Питання 1.1 ' },
        {  name: 'Питання 1.2' },
        {  name: 'Питання 1.3' },
        {  name: 'Питання 1.4' }
      ]
    },
    {
      name: 'Модель невтручання',
      questions: <PeriodicElement[]>[
        {  name: 'Питання 2.1 ' },
        { name: 'Питання 2.2' },
        {  name: 'Питання 2.3' },
        {  name: 'Питання 2.4' }
      ]
    },

  ];
  selectedCategory: Questions = this.categories[0];

  SelectCategory(data: Questions): void {
    if (data == null) { return; }

    this.selectedCategory = data;
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  RemoveItem = (data) => {

    const index = this.selectedCategory.questions.indexOf(data);
    this.selectedCategory.questions.splice(index, 1);
    this.WriteToLocalStorage();
  }
  WriteToLocalStorage() {
    const jsonData = JSON.stringify(this.categories);
    window.localStorage.setItem('categories', jsonData);
  }
  AddQuestion = () => {

    // tslint:disable-next-line:prefer-const
    let tempRow = <PeriodicElement>Object.assign({}, this.Row);

    if (!tempRow.name.length) {
      return;

    }
    this.selectedCategory.questions.push(tempRow);
    this.Row.name = '';
    this.WriteToLocalStorage();
  }
  ngOnInit() {
    const categoriesFromLocalStorage = window.localStorage.getItem('categories');
    if (categoriesFromLocalStorage != null) {
      this.categories = JSON.parse(categoriesFromLocalStorage) as Questions[];
      this.selectedCategory = this.categories[0];
    }
    this.Row.name = '';
  }
}

export class Questions {
  name: string;
  questions: PeriodicElement[];
}

export class PeriodicElement {
  name: string;
  answer?: any;
}


