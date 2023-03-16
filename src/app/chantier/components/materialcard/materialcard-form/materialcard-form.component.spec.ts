import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardFormComponent } from './materialcard-form.component';

describe('MaterialcardFormComponent', () => {
  let component: MaterialcardFormComponent;
  let fixture: ComponentFixture<MaterialcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
