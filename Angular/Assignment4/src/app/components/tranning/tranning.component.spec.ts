import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranningComponent } from './tranning.component';

describe('TranningComponent', () => {
  let component: TranningComponent;
  let fixture: ComponentFixture<TranningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
