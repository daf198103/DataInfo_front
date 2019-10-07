import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPorCpfComponent } from './user-por-cpf.component';

describe('UserPorCpfComponent', () => {
  let component: UserPorCpfComponent;
  let fixture: ComponentFixture<UserPorCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPorCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPorCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
