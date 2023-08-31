import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  name = "John";
 score1 = 50;
 score2 = 42.50;

}


console.log("name" + name);
