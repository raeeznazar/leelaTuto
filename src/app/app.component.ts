import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project_lele_tuto';

  constructor(private authService: AuthService) {}

  onLoginClick() {
    this.authService.login();
  }

  onLogOutClick() {
    this.authService.logout();
  }
}
