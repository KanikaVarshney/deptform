import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRequestsComponent } from './application-requests.component';

describe('ApplicationRequestsComponent', () => {
  let component: ApplicationRequestsComponent;
  let fixture: ComponentFixture<ApplicationRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationRequestsComponent]
    });
    fixture = TestBed.createComponent(ApplicationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
