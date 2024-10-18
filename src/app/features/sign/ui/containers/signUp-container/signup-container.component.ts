import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import de FormsModule
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule] 
})
export class SignupComponent {
  signupForm: FormGroup;
  verificationCodeVisible: boolean = false;
  verificationCode: string = ''; 

  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.signupForm = this.fb.group({
      pseudo: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Formulaire soumis :', this.signupForm.value);
  
      this.authService.register(this.signupForm.value).subscribe({
        next: () => {
          this.verificationCodeVisible = true;
          console.log('Email de vérification envoyé');
        },
        error: (err) => {
          console.error('Erreur lors de l\'enregistrement :', err);
        }
      });
    }
  }

  validateCode() {
    if (this.verificationCode) {
      console.log('Code de vérification :', this.verificationCode);
  
      this.authService.validateCode(this.verificationCode).subscribe({
        next: () => {
          console.log('Code de vérification validé');
                 },
        error: (err) => {
          console.error('Erreur lors de la validation du code :', err);
        }
      });
    } else {
      console.error('Le code de vérification est vide');
    }
  }
  

}
