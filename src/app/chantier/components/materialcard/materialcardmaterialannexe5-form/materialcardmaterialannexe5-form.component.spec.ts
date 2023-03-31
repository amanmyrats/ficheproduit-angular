import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materialcardmaterialannexe5FormComponent } from './materialcardmaterialannexe5-form.component';

describe('Materialcardmaterialannexe5FormComponent', () => {
  let component: Materialcardmaterialannexe5FormComponent;
  let fixture: ComponentFixture<Materialcardmaterialannexe5FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Materialcardmaterialannexe5FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Materialcardmaterialannexe5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
