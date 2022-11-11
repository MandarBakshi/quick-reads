import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpamDetectionService {

  baseURL = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  public GetSpamResults(formData: any) {
    let url = this.baseURL + "/api/tools/ml/models/spamdetection/";
    let res = this.http.post<any>(url, formData);

    return res;
  }
}
