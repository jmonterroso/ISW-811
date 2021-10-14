import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hola mundo';
  elements = ['hola', 'mundo', 'que', 'tal', 'como', 'estas'];
}
