import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showLoading$: boolean = true;
  constructor(public auth: AuthService) {}
  ngOnInit() {
   this.loading();
  }
  loading(): boolean {
    if(this.auth.user$) {
      this.auth.user$.subscribe(() => this.showLoading$ = false)
      return true;
    } else return false;
  }
  
}
