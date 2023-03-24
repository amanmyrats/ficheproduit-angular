import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardMaterialFormComponent } from './materialcard-material-form.component';

describe('MaterialcardMaterialFormComponent', () => {
  let component: MaterialcardMaterialFormComponent;
  let fixture: ComponentFixture<MaterialcardMaterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardMaterialFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardMaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
