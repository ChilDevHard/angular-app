import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeBarComponent } from './welcome-bar/welcome-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WelcomeBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
