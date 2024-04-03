import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-services/auth-service/auth.service';
import { UserStorageService } from '../../auth-services/storage-service/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  isSpinning: boolean = false;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    this.isSpinning = true;

    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username, password).subscribe(
      (res) => {
        this.isSpinning = false;


        if (UserStorageService.isAdminLoggedIn()) {
          this.router.navigateByUrl('admin/dashboard');
        } else if (UserStorageService.isCustomerLoggedIn()) {
          this.router.navigateByUrl('customer/dashboard');
        }

        console.log('res', res);
      },
      (error) => {
        console.log('errorr', error);
        this.isSpinning = false;

        if (error.status === 406) {
          this.snackBar.open(
            'User Is Not Active. Please Verify Email.',
            'ERROR',
            { duration: 5000 }
          );
        } else {
          this.snackBar.open('Bad credentials', 'ERROR', { duration: 5000 });
        }
      }
    );
  }
}
