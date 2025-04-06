import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeBarComponent } from './welcome-bar/welcome-bar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WelcomeBarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
