import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryitemTableComponent } from './inventoryitem-table.component';

describe('InventoryitemTableComponent', () => {
  let component: InventoryitemTableComponent;
  let fixture: ComponentFixture<InventoryitemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryitemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryitemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
