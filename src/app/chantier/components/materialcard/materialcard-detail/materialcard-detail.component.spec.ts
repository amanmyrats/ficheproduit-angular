import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardDetailComponent } from './materialcard-detail.component';

describe('MaterialcardDetailComponent', () => {
  let component: MaterialcardDetailComponent;
  let fixture: ComponentFixture<MaterialcardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
