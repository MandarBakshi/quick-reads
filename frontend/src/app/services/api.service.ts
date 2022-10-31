import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  GetSummaryText(formData: any) {
    let textSummaryURL = this.baseURL + "api/tools/summarizer/text/";
    let tempData = this.http.post<any>(textSummaryURL, formData);
    return tempData;
  }

  GetSummaryPDF(formData: any) {
    let pdfSummaryURL = this.baseURL + "api/tools/summarizer/pdf";
    let tempData = this.http.post<any>(pdfSummaryURL, formData);
    return tempData;
  }

  GetSummaryURL(formData: any) {
    let urlSummaryURL = this.baseURL + "api/tools/summarizer/url";
    let tempData = this.http.post<any>(urlSummaryURL, formData);
    return tempData;
  }
}
