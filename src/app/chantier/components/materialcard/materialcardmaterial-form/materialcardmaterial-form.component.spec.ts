import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardmaterialFormComponent } from './materialcardmaterial-form.component';

describe('MaterialcardmaterialFormComponent', () => {
  let component: MaterialcardmaterialFormComponent;
  let fixture: ComponentFixture<MaterialcardmaterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardmaterialFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardmaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
