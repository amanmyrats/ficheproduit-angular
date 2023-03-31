import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materialcardmaterialannexe5TableComponent } from './materialcardmaterialannexe5-table.component';

describe('Materialcardmaterialannexe5TableComponent', () => {
  let component: Materialcardmaterialannexe5TableComponent;
  let fixture: ComponentFixture<Materialcardmaterialannexe5TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Materialcardmaterialannexe5TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Materialcardmaterialannexe5TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
