import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventoryitemannexe5TableComponent } from './inventoryitemannexe5-table.component';

describe('Inventoryitemannexe5TableComponent', () => {
  let component: Inventoryitemannexe5TableComponent;
  let fixture: ComponentFixture<Inventoryitemannexe5TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inventoryitemannexe5TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inventoryitemannexe5TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
