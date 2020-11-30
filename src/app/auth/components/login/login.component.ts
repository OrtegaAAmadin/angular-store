import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login(event: Event): void{
    event.preventDefault();
    if (this.forma.valid) {
      const value = this.forma.value;
      this.authService.login(value.email, value.password).then(() => {
        this.router.navigate(['/admin']);
      }).catch(() => {
        alert('usuario no valido');
      });
    }
  }

  private buildForm(): void{
    this.forma = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
