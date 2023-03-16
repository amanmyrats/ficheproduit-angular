import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardEditComponent } from './materialcard-edit.component';

describe('MaterialcardEditComponent', () => {
  let component: MaterialcardEditComponent;
  let fixture: ComponentFixture<MaterialcardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
