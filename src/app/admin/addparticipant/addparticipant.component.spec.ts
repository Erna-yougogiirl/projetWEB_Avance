import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparticipantComponent } from './addparticipant.component';

describe('AddparticipantComponent', () => {
  let component: AddparticipantComponent;
  let fixture: ComponentFixture<AddparticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddparticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
