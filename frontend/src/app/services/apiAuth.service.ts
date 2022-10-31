import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  private username?: string;

  public GetUsername() {
    return this.username;
  }

  public SetUsername(data: string): void {
    this.username = data;
  }

  public ClearUsername(): void {
    this.username = undefined;
  }

  baseURL = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  LoginProcess(formData: any) {
    let loginURL = this.baseURL + `api/auth/login/`;
    let data = this.http.post<any>(loginURL, formData);

    return data;
  }
}
