import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  developers: any = [
    {
      devName: "Mandar Bakshi",
      roles: ['Backend', 'Frontend', 'Database'],
      institution: 'SLRTCE',
      githubProfile: 'https://github.com/MandarBakshi'
    },
    {
      devName: "Omkar Tendolkar",
      roles: ['Backend', 'Database', 'Model Building'],
      institution: 'SLRTCE',
      githubProfile: 'https://github.com/MandarBakshi'
    },
    {
      devName: "Ashish Tak",
      roles: ['Frontend', 'Research', 'Documentation'],
      institution: 'SLRTCE',
      githubProfile: 'https://github.com/MandarBakshi'
    },
    {
      devName: "Aayush Yadav",
      roles: ['Frontend', 'Documentation', 'Research'],
      institution: 'SLRTCE',
      githubProfile: 'https://github.com/MandarBakshi'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
