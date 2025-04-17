import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'billingSystem';
  
}
