import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private mediaSub?: Subscription;
  private activeMediaQuery?: string;
  
  public isMobile?: boolean;
  public username?: string;

  constructor(private mediaObserver: MediaObserver) {}

  
  ngOnInit(): void {
    this.InitializeLayout();
  }
  
  
  ngOnDestroy(): void {
    this.mediaSub?.unsubscribe();
  }


  InitializeLayout(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe(
      change => {
        // console.log(change);
        this.activeMediaQuery = change[0].mqAlias;
        if (this.activeMediaQuery === 'xs') {
              this.isMobile = true;
            }
            else {
              this.isMobile = false;
            }
            console.log("Mobile view = ", this.isMobile);
      }
    );
  }

}
