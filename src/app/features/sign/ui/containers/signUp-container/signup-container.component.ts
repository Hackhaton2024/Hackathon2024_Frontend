import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
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

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.signupForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }
  ngOnInit(): void {   
    this.signupForm.reset();
  }

  ngOnDestroy(): void {   
    this.signupForm.reset();
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
    } else {
      console.error('Le code de vérification est vide');
    }
  }
}
