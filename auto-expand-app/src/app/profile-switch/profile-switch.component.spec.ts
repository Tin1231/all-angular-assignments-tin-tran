import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSwitchComponent } from './profile-switch.component';

describe('ProfileSwitchComponent', () => {
  let component: ProfileSwitchComponent;
  let fixture: ComponentFixture<ProfileSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
