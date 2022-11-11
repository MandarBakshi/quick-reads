import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamDetectorComponent } from './spam-detector.component';

describe('SpamDetectorComponent', () => {
  let component: SpamDetectorComponent;
  let fixture: ComponentFixture<SpamDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpamDetectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpamDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
