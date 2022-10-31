import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-summarizer',
  templateUrl: './summarizer.component.html',
  styleUrls: ['./summarizer.component.scss']
})
export class SummarizerComponent implements OnInit {

  selectedInputType?: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.selectedInputType = 'text';
  }

}
