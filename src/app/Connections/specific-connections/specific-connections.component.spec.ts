import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificConnectionsComponent } from './specific-connections.component';

describe('SpecificConnectionsComponent', () => {
  let component: SpecificConnectionsComponent;
  let fixture: ComponentFixture<SpecificConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
