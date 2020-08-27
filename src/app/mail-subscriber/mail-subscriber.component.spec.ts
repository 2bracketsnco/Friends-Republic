import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSubscriberComponent } from './mail-subscriber.component';

describe('MailSubscriberComponent', () => {
  let component: MailSubscriberComponent;
  let fixture: ComponentFixture<MailSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
