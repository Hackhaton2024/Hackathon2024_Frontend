import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../app/shared/services/auth.interceptor'; // Assure-toi que le chemin est correct
import { ReactiveFormsModule } from '@angular/forms';
=======

>>>>>>> 858f6b5bf424e3ebc9225895a37a4c3cd995795c

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
 
=======
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],


>>>>>>> 858f6b5bf424e3ebc9225895a37a4c3cd995795c
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})
export class AppComponent {
  title = 'hackathon_app';
}
