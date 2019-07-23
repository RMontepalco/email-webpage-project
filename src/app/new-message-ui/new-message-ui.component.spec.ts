import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageUiComponent } from './new-message-ui.component';

describe('NewMessageUiComponent', () => {
  let component: NewMessageUiComponent;
  let fixture: ComponentFixture<NewMessageUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
