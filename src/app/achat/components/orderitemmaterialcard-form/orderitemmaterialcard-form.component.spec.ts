import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemmaterialcardFormComponent } from './orderitemmaterialcard-form.component';

describe('OrderitemmaterialcardFormComponent', () => {
  let component: OrderitemmaterialcardFormComponent;
  let fixture: ComponentFixture<OrderitemmaterialcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderitemmaterialcardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderitemmaterialcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
