import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexe5ListComponent } from './annexe5-list.component';

describe('Annexe5ListComponent', () => {
  let component: Annexe5ListComponent;
  let fixture: ComponentFixture<Annexe5ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Annexe5ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annexe5ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
