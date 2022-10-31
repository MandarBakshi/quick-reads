import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: any = [
    {
      "title" : "Summarization",
      "description" : "Summarize big documents using various techniques. You can summarize the documents of following types: Text,PDF, and URL",
      "link" : "/tools/summarization"
    }
    // {
    //   "title" : "Converters",
    //   "description" : "Summarize big documents using various techniques. You can summarize the documents of following types: Text,PDF, and URL",
    //   "link" : "/tools/summarization"
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
