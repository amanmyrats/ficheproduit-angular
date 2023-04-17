import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialcardroomFormComponent } from './materialcardroom-form.component';

describe('MaterialcardroomFormComponent', () => {
  let component: MaterialcardroomFormComponent;
  let fixture: ComponentFixture<MaterialcardroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcardroomFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcardroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
