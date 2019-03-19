import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformDetailComponent } from './userformDetail.component';

describe('UserformDetailComponent', () => {
  let component: UserformDetailComponent;
  let fixture: ComponentFixture<UserformDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserformDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserformDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
