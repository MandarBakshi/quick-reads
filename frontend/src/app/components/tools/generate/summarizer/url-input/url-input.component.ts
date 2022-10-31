import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent implements OnInit {

  urlInputForm?: FormGroup;
  resultData?: String;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.InitializeUrlInputForm();
  }

  InitializeUrlInputForm() {
    this.urlInputForm = this.fb.group(
      {
        urlInput: ['', Validators.required],
        length: ['', Validators.required]
      }
    );
  }

  UrlInputSubmit() {
    console.log(this.urlInputForm?.value);
  }

}
