import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractimageComponent } from './extractimage.component';

describe('ExtractimageComponent', () => {
  let component: ExtractimageComponent;
  let fixture: ComponentFixture<ExtractimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
