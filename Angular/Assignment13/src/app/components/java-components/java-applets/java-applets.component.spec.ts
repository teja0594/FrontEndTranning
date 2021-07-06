import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaAppletsComponent } from './java-applets.component';

describe('JavaAppletsComponent', () => {
  let component: JavaAppletsComponent;
  let fixture: ComponentFixture<JavaAppletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaAppletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaAppletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
