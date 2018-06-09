import { Questions } from './../questions/questions.component';
import { Component, OnInit } from '@angular/core';
import { JsonpInterceptor } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  constructor() { }

  StartTest() {
    const json = window.localStorage.getItem('categories');
    if (json == null || !json.length) {
      alert('Что то пошло не так. Пожалуйста обратитесь к системному администратору!');
    }
    const questions = JSON.parse(json) as Questions[];

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      for (let j = 0; j < question.questions.length; j++) {

        const oneQuestion = question.questions[j];

        const result = confirm(oneQuestion.name);

        oneQuestion.answer = result;

      }
    }

    window.localStorage.setItem('categories', JSON.stringify(questions));

    alert('Тест пройдено успішно!');

  }

  ngOnInit() {
  }

}
