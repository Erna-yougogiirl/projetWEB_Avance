import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSessionEditComponent } from './app-session-edit.component';

describe('AppSessionEditComponent', () => {
  let component: AppSessionEditComponent;
  let fixture: ComponentFixture<AppSessionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSessionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
