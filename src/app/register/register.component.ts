import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthServiceService) {}

  register() {
    this.authService.register(this.user).subscribe(response => {
      console.log('Sikeres regisztráció:', response);
    });
  }
}
