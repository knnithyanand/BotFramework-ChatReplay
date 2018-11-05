import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReplayComponent } from './chat-replay.component';

describe('ChatReplayComponent', () => {
  let component: ChatReplayComponent;
  let fixture: ComponentFixture<ChatReplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatReplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
