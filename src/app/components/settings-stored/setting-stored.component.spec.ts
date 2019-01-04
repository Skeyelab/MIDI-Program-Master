import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStoredComponent } from './setting-stored.component';

describe('SettingStoredComponent', () => {
  let component: SettingStoredComponent;
  let fixture: ComponentFixture<SettingStoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingStoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingStoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
