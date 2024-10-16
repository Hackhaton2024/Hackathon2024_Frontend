import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { CommonModule } from '@angular/common';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../app/shared/services/auth.interceptor'; // Assure-toi que le chemin est correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  // providers: [
  //   provideHttpClient(), // Ajouter cela ici
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  // Si tu utilises un intercepteur
  // ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Correction de styleUrl à styleUrls
})
export class AppComponent {
  title = 'hackathon_app';
}
