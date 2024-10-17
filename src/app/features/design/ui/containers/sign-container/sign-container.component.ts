import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BtnComponent } from "../../../../../shared/components/btn/btn.component";


@Component({
  selector: 'app-sign-container',
  standalone:true,
  imports: [BtnComponent],
  templateUrl: './sign-container.component.html',
  styleUrls: ['./sign-container.component.scss']
})
export class AuthChoiceComponent {
  constructor(private router: Router) {}

  // Redirection vers la page Signin
  goToSignin() {
    this.router.navigate(['/signin']);
  }

  // Redirection vers la page Signup
  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
