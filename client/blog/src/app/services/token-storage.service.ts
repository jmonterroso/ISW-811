import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  //Se eliminar el token del localstorage
  signOut(): void {
    window.sessionStorage.clear();
  }

  //Se guardar el token en el localstorage
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //Se obtiene el token del localstorage
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  //Se guardar el usuario en el localstorage
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //Se obtiene el usuario del localstorage
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}