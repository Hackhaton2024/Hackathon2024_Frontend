import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../shared/services/auth.service';
import { User } from '../../../../../models/users';

@Component({
  selector: 'app-login-container',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    id: null,
    username: null,
    email: '',
    password: '',
    isAdmin: false,
  };

  // constructor(private router: Router, private authService: AuthService) {}

  // login() {
  //   // Utiliser l'AuthService pour gérer la connexion
  //   this.authService.login(this.user).subscribe(
  //     (response: any) => {
  //       console.log('Connexion réussie', response);
  //       this.authService.saveToken(response.token); // stocke le token
  //       this.router.navigate(['/dashboard']); // Redirige l'utilisateur après connexion
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la connexion', error);
  //     }
  //   );
  // }
}
