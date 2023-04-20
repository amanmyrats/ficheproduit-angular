import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemTableComponent } from './orderitem-table.component';

describe('OrderitemTableComponent', () => {
  let component: OrderitemTableComponent;
  let fixture: ComponentFixture<OrderitemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderitemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderitemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
