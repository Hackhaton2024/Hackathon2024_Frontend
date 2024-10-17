import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import de FormsModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule] // Ajout de FormsModule ici
})
export class SignupComponent {
  signupForm: FormGroup;
  verificationCodeVisible: boolean = false; // Indique si le champ de code de vérification est visible
  verificationCode: string = ''; // Propriété pour stocker le code de vérification

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Formulaire soumis :', this.signupForm.value);
      // Simuler l'envoi d'un email ici
      this.verificationCodeVisible = true; // Afficher le champ du code de vérification
    }
  }

  validateCode() {
    console.log('Code de vérification :', this.verificationCode);
    // Logique de validation du code ici
  }
}
