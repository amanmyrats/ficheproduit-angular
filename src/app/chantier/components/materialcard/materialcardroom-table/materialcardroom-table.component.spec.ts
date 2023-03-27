import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardroomTableComponent } from './materialcardroom-table.component';

describe('MaterialcardroomTableComponent', () => {
  let component: MaterialcardroomTableComponent;
  let fixture: ComponentFixture<MaterialcardroomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardroomTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardroomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
