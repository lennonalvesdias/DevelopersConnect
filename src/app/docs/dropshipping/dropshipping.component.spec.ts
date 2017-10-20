import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropshippingComponent } from './dropshipping.component';

describe('DropshippingComponent', () => {
  let component: DropshippingComponent;
  let fixture: ComponentFixture<DropshippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropshippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropshippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
