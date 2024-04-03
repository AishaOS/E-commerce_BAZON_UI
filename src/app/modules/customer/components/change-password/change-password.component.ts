import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth-services/auth-service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  changePasswordForm!: FormGroup;
  isSpinning = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  onSubmit(): void {

    if (this.changePasswordForm.valid) {
      const newPassword = this.changePasswordForm.get('newPassword')?.value;
      const confirmPassword = this.changePasswordForm.get('confirmPassword')?.value;

      if (newPassword !== confirmPassword) {
        this.snackBar.open('Passwords do not match.', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        return;
      }

      this.isSpinning = true;

      this.authService.updatePassword(this.changePasswordForm.value).subscribe(
        (response) => {
          this.isSpinning = false;
          console.log(response);
          if (response.id != null) {
            this.snackBar.open('Password Changed successfully', 'Close', { duration: 5000 });
          } else {
            this.snackBar.open('Incorrect old password', 'Close', { duration: 5000 });
            this.changePasswordForm.reset();
          }

        },
        (error) => {
          this.isSpinning = false;
          this.snackBar.open('Failed. Please try again.', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      );
    } else {
      for (const i in this.changePasswordForm.controls) {
        this.changePasswordForm.controls[i].markAsDirty();
        this.changePasswordForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
