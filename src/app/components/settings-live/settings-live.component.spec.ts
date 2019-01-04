import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLiveComponent } from './settings-live.component';

describe('SettingsLiveComponent', () => {
  let component: SettingsLiveComponent;
  let fixture: ComponentFixture<SettingsLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
