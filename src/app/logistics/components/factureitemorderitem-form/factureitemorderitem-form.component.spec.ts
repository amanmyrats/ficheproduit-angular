import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureitemorderitemFormComponent } from './factureitemorderitem-form.component';

describe('FactureitemorderitemFormComponent', () => {
  let component: FactureitemorderitemFormComponent;
  let fixture: ComponentFixture<FactureitemorderitemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureitemorderitemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureitemorderitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
