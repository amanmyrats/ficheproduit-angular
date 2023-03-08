import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantierDashboardComponent } from './chantier-dashboard.component';

describe('ChantierDashboardComponent', () => {
  let component: ChantierDashboardComponent;
  let fixture: ComponentFixture<ChantierDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChantierDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantierDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
