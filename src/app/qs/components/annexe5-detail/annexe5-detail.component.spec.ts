import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexe5DetailComponent } from './annexe5-detail.component';

describe('Annexe5DetailComponent', () => {
  let component: Annexe5DetailComponent;
  let fixture: ComponentFixture<Annexe5DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Annexe5DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annexe5DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
