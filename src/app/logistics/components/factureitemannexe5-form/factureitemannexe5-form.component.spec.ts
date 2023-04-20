import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Factureitemannexe5FormComponent } from './factureitemannexe5-form.component';

describe('Factureitemannexe5FormComponent', () => {
  let component: Factureitemannexe5FormComponent;
  let fixture: ComponentFixture<Factureitemannexe5FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Factureitemannexe5FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Factureitemannexe5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
