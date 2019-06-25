import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionTimelineComponent } from './connection-timeline.component';

describe('ConnectionTimelineComponent', () => {
  let component: ConnectionTimelineComponent;
  let fixture: ComponentFixture<ConnectionTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
