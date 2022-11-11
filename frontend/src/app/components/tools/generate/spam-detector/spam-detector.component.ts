import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpamDetectionService } from 'src/app/services/spam-detection-services/spam-detection-service.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-spam-detector',
  templateUrl: './spam-detector.component.html',
  styleUrls: ['./spam-detector.component.scss']
})
export class SpamDetectorComponent implements OnInit, OnDestroy {

  spamDetectionForm?: FormGroup;
  sub?: Subscription;

  result?: string;
  cssClass?: string;
  isLoading?: boolean;


  constructor(private fb: FormBuilder, private spamDetectorService: SpamDetectionService) { }

  ngOnInit(): void {
    this.InitializeForm();
  }

  InitializeForm() {
    this.spamDetectionForm = this.fb.group(
      {
        text: ['', Validators.required]
      }
    );
  }

  OnFormSubmit() {
    this.isLoading = true;
    this.result = undefined;
    this.cssClass = undefined;
    this.sub = this.spamDetectorService.GetSpamResults(this.spamDetectionForm?.value).subscribe(
      {
        next: (res) => {
          this.isLoading = false;
          if (res == 1) {
            this.result = "SPAM";
            this.cssClass = 'result-spam';
          } else {
            this.result = "All Good";
            this.cssClass = 'result-ham';
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        }
      }
    );
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

}
