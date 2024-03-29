import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardComponent } from './materialcard.component';

describe('MaterialcardComponent', () => {
  let component: MaterialcardComponent;
  let fixture: ComponentFixture<MaterialcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
