import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventoryformat1TableComponent } from './inventoryformat1-table.component';

describe('Inventoryformat1TableComponent', () => {
  let component: Inventoryformat1TableComponent;
  let fixture: ComponentFixture<Inventoryformat1TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inventoryformat1TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inventoryformat1TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
