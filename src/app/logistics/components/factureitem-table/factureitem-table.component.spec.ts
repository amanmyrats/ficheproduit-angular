import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureitemTableComponent } from './factureitem-table.component';

describe('FactureitemTableComponent', () => {
  let component: FactureitemTableComponent;
  let fixture: ComponentFixture<FactureitemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureitemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureitemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
