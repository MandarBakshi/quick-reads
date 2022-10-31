import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftotextComponent } from './pdftotext.component';

describe('PdftotextComponent', () => {
  let component: PdftotextComponent;
  let fixture: ComponentFixture<PdftotextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdftotextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdftotextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
