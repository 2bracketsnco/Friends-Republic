import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DekComponent } from './dek.component';

describe('DekComponent', () => {
  let component: DekComponent;
  let fixture: ComponentFixture<DekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
