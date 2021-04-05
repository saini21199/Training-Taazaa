import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeDirectiveComponent } from './custom-attribute-directive.component';

describe('CustomAttributeDirectiveComponent', () => {
  let component: CustomAttributeDirectiveComponent;
  let fixture: ComponentFixture<CustomAttributeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAttributeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
