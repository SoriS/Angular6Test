import { Observable } from 'rxjs';
import { Questions } from './../questions/questions.component';
import { Component, OnInit } from '@angular/core';
import { JsonpInterceptor } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { callbackify } from 'util';
import { async } from 'q';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  True: Function;
   json = window.localStorage.getItem('categories');
   questions = JSON.parse(this.json) as Questions[];

   quest =  this.questions[0].questions[0].name;
  constructor() { }

  async StartTest() {
    document.getElementById('myModal').style.display = 'block';
    if (this.json == null || !this.json.length) {
      alert('Что то пошло не так. Пожалуйста обратитесь к системному администратору!');
      return;
    }
     // tslint:disable-next-line:no-shadowed-variable



    for (let i = 0; i < this.questions.length; i++) {
      const question =  this.questions[i];
      for (let j = 0; j < question.questions.length; j++) {

        const oneQuestion = question.questions[j];
        // tslint:disable-next-line:prefer-const
        let result = new Promise((resolve, reject) => {
          document.getElementById('YesButton').addEventListener('click', () => {
            document.getElementById('myModal').style.display = 'none';
             resolve(true);
            });
      }).then(e => { console.log(e); } );

        oneQuestion.answer = result;

      }
    }

    window.localStorage.setItem('categories', JSON.stringify(this.questions));


  }

  ngOnInit() {
  }

}
