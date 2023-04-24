import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YgtableDetailComponent } from './ygtable-detail.component';

describe('YgtableDetailComponent', () => {
  let component: YgtableDetailComponent;
  let fixture: ComponentFixture<YgtableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YgtableDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YgtableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
