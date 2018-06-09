import { Component, OnInit, ViewChild } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  displayedColumns = ['position', 'name'];
  tableArray: Array<string> = [];
  Row = { position: 5, name: 'sda' };
  AddQuestion = () => {
    this.Row.position++;
    // tslint:disable-next-line:prefer-const
    let tempRow = Object.assign({}, this.Row);
    this.dataSource.data.push(tempRow);
    this.dataSource._updateChangeSubscription();
    this.Row.name = '';
  }

  // tslint:disable-next-line:member-ordering
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // tslint:disable-next-line:member-ordering
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Питання 1 ' },
  { position: 2, name: 'Питання 2' },
  { position: 3, name: 'Питання 3' },
  { position: 4, name: 'BeryПитання 4' }
];
