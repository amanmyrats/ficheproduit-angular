import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemmaterialcardmaterialFormComponent } from './orderitemmaterialcardmaterial-form.component';

describe('OrderitemmaterialcardmaterialFormComponent', () => {
  let component: OrderitemmaterialcardmaterialFormComponent;
  let fixture: ComponentFixture<OrderitemmaterialcardmaterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderitemmaterialcardmaterialFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderitemmaterialcardmaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
