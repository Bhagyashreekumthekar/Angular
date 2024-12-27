import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldDemoComponent } from './text-field-demo.component';

describe('TextFieldDemoComponent', () => {
  let component: TextFieldDemoComponent;
  let fixture: ComponentFixture<TextFieldDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
