import { ChangeDetectorRef, Component, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginService } from './services/loginservices';
import { CartService } from '../cart-details/services/cartservice';
import { LoginResponse } from '../models.ts/login-response.model';


declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class login implements AfterViewInit {

  @Output() close = new EventEmitter<void>();

  email = '';
  password = '';
  showDialog = false;
  error = '';
  showPassword = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private cartServices: CartService,
    private cdr: ChangeDetectorRef
  ) {}


  ngAfterViewInit() {
    this.waitForGoogle();
  }

  private waitForGoogle() {
    if ((window as any).google?.accounts?.id) {
      this.initGoogle();
    } else {
      setTimeout(() => this.waitForGoogle(), 100);
    }
  }

  private initGoogle() {
    google.accounts.id.initialize({
      client_id: "127997694068-djgvmqj311ldteojrtc84gbkc8h7e9bb.apps.googleusercontent.com",
      callback: (response: any) => this.handleGoogleLogin(response),
      ux_mode: "popup",
      auto_select: false,
      use_fedcm_for_prompt: false
    });

    google.accounts.id.renderButton(
      document.getElementById("googleLoginBtn")!,
      {
        theme: "outline",
        size: "large",
        width: "100%"
      }
    );
  }

  private handleGoogleLogin(response: any) {
    if (!response?.credential) return;

    this.loginService.googleRegister(response.credential).subscribe({
      next: (res: any) => {
        this.loginService.saveSession(res.token, res.user);

        const userId = res.user?.user_id;
        const token = res.token;

        if (userId) {
          localStorage.setItem('userId', userId.toString());
          localStorage.setItem('token', token);
          this.cartServices.mergeCartAfterLogin(userId, token);
        }
        this.showDialog = false;
        this.detectChangesSafe();

        this.close.emit();

        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error("Google login failed:", err);
        alert("Google Login failed");
      }
    });
  }

  onBackgroundClick() {
    this.router.navigate(['/']);
  }


onLogin() {
  this.loginService.login({
    email: this.email,
    password: this.password
  }).subscribe({
    next: (res: LoginResponse) => {
      // sessionStorage.setItem('token', res.token);
      // sessionStorage.setItem('user', JSON.stringify(res.user));
            this.loginService.saveSession(res.token, res.user);

      const userId = res.user.user_id;

      sessionStorage.setItem('userId', userId.toString());

      this.cartServices.mergeCartAfterLogin(userId, res.token);

      this.showDialog = true;
      this.detectChangesSafe();
    },
    error: (err) => {
      console.error('Login failed:', err);
    }
  });
}


  closeDialog() {
    this.showDialog = false;
    this.detectChangesSafe();
    this.router.navigate(['/']);
    this.close.emit();
    window.location.reload();
  }

  private detectChangesSafe(): void {
    try {
      this.cdr.detectChanges();
    } catch {
      // no-op if view already destroyed
    }
  }
}
