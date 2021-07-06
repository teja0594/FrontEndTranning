import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvJavaComponent } from './adv-java.component';

describe('AdvJavaComponent', () => {
  let component: AdvJavaComponent;
  let fixture: ComponentFixture<AdvJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
