import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardCreateComponent } from './materialcard-create.component';

describe('MaterialcardCreateComponent', () => {
  let component: MaterialcardCreateComponent;
  let fixture: ComponentFixture<MaterialcardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
