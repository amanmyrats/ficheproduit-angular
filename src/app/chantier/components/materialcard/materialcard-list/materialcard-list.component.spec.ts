import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardListComponent } from './materialcard-list.component';

describe('MaterialcardListComponent', () => {
  let component: MaterialcardListComponent;
  let fixture: ComponentFixture<MaterialcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
