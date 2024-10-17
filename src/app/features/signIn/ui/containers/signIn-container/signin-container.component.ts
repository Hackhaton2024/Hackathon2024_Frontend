import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone:true,
  templateUrl: './signin-container.component.html',
  styleUrls: ['./signin-container.component.scss'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required]]
    });

    // Réinitialise le formulaire si tu reviens sur la page
    this.signinForm.reset();
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      console.log('Form Submitted', this.signinForm.value);
      // logiques supplémentaires ici
    }
  }
}
