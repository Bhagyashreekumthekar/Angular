import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCSSComponent } from './inline-css.component';

describe('InlineCSSComponent', () => {
  let component: InlineCSSComponent;
  let fixture: ComponentFixture<InlineCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineCSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
