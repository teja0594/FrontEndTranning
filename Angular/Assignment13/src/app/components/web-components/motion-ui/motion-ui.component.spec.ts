import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionUIComponent } from './motion-ui.component';

describe('MotionUIComponent', () => {
  let component: MotionUIComponent;
  let fixture: ComponentFixture<MotionUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotionUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
