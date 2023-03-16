import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardmaterialTableComponent } from './materialcardmaterial-table.component';

describe('MaterialcardmaterialTableComponent', () => {
  let component: MaterialcardmaterialTableComponent;
  let fixture: ComponentFixture<MaterialcardmaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardmaterialTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardmaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
