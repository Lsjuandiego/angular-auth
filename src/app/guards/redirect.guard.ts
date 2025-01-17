import { Injectable } from '@angular/core';
import { TokenService } from '@services/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard {
  constructor(private tokenService: TokenService, private router: Router) {}

  //si se tiene el token, evitar que se vaya al login y se mantenga en app
  canActivate(): boolean {
    const isValidToken = this.tokenService.isValidRefreshToken();
    if (isValidToken) {
      this.router.navigate(['/app']);
    }
    return true;
  }
}
