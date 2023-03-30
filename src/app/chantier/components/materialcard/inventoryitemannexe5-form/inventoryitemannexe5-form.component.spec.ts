import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventoryitemannexe5FormComponent } from './inventoryitemannexe5-form.component';

describe('Inventoryitemannexe5FormComponent', () => {
  let component: Inventoryitemannexe5FormComponent;
  let fixture: ComponentFixture<Inventoryitemannexe5FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inventoryitemannexe5FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inventoryitemannexe5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
