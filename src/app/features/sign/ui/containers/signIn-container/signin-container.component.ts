import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service'; 
@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin-container.component.html',
  styleUrls: ['./signin-container.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required]]
    });   
    this.signinForm.reset();
  }

  ngOnDestroy(): void {
    
    this.signinForm.reset();
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      const { email, motDePasse } = this.signinForm.value;
     
      this.authService.login(email, motDePasse).subscribe(
        (response) => {
          console.log('Login successful', response);          
        },
        (error) => {
          console.error('Login failed', error);          
        }
      );
    }
  }
}
