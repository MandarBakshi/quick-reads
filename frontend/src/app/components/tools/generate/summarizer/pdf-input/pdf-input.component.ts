import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pdf-input',
  templateUrl: './pdf-input.component.html',
  styleUrls: ['./pdf-input.component.scss']
})
export class PdfInputComponent implements OnInit, OnDestroy {

  pdfInputForm?: FormGroup;
  pdfSub?: Subscription;
  result?: string;
  isLoading?: boolean;
  pdfFile?: File;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.InitializePdfInputForm();
  }

  InitializePdfInputForm(): void {
    this.pdfInputForm = this.fb.group(
      {
        pdfInput: ['', Validators.required],
        length: ['', Validators.required]
      }
    );
  }


  OnFileSelect(e: any) {
    this.pdfFile = e.target.files[0];
  }


  SubmitPdfInputForm(): void {
    if (this.pdfFile) {
      this.result = undefined;
      let fd = new FormData();
      fd.append('pdfInput', this.pdfFile);
      fd.append('length', this.pdfInputForm?.get('length')?.value);
      // console.table(fd);

      this.isLoading = true;
      this.pdfSub = this.api.GetSummaryPDF(fd).subscribe(
        {
          next: (res) => {
            // console.log(res);
            this.isLoading = false
            this.result = res;
          },
          error: (err) => {console.log(err); this.isLoading = false;}
        }
      );
    }
  }

  ngOnDestroy(): void {
      this.pdfSub?.unsubscribe();
  }

}
