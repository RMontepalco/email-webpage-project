import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideUiComponent } from './side-ui.component';

describe('SideUiComponent', () => {
  let component: SideUiComponent;
  let fixture: ComponentFixture<SideUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
