import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatawsComponent } from './chataws.component';

describe('ChatawsComponent', () => {
  let component: ChatawsComponent;
  let fixture: ComponentFixture<ChatawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatawsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
