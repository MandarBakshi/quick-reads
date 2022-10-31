import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  textInputForm?: FormGroup;

  result?: string;
  isLoading?: boolean;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.InitializeTextInputForm();
  }

  InitializeTextInputForm() {
    this.textInputForm = this.fb.group(
      {
        textInput: ['', Validators.required],
        length: ['', Validators.required]
      }
    );
  }

  TextInputSubmit() {
    this.isLoading = true;
    this.result = undefined;
    console.log(this.textInputForm?.value);
    this.api.GetSummaryText(this.textInputForm?.value).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.isLoading = false
          this.result = res;
        },
        error: (err) => {console.log(err); this.isLoading = false;}
      }
    );
  }

  // ngOnDestroy(): void {
  //   this.api.GetSummaryText(this.textInputForm?.value).unsubscribe();
  // }

}
