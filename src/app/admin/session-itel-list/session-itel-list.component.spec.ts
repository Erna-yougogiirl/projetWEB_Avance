import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItelListComponent } from './session-itel-list.component';

describe('SessionItelListComponent', () => {
  let component: SessionItelListComponent;
  let fixture: ComponentFixture<SessionItelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionItelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionItelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
