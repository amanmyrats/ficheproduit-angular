import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QsDashboardComponent } from './qs-dashboard.component';

describe('QsDashboardComponent', () => {
  let component: QsDashboardComponent;
  let fixture: ComponentFixture<QsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
