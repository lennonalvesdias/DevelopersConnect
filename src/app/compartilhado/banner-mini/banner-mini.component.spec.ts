import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMiniComponent } from './banner-mini.component';

describe('BannerMiniComponent', () => {
  let component: BannerMiniComponent;
  let fixture: ComponentFixture<BannerMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
