import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryitemFormComponent } from './inventoryitem-form.component';

describe('InventoryitemFormComponent', () => {
  let component: InventoryitemFormComponent;
  let fixture: ComponentFixture<InventoryitemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryitemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
