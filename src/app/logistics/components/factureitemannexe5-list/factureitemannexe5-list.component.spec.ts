import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Factureitemannexe5ListComponent } from './factureitemannexe5-list.component';

describe('Factureitemannexe5ListComponent', () => {
  let component: Factureitemannexe5ListComponent;
  let fixture: ComponentFixture<Factureitemannexe5ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Factureitemannexe5ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Factureitemannexe5ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
