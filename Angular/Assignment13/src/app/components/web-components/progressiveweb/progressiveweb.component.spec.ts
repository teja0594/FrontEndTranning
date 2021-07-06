import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressivewebComponent } from './progressiveweb.component';

describe('ProgressivewebComponent', () => {
  let component: ProgressivewebComponent;
  let fixture: ComponentFixture<ProgressivewebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressivewebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressivewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
