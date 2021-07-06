import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaJacksonComponent } from './java-jackson.component';

describe('JavaJacksonComponent', () => {
  let component: JavaJacksonComponent;
  let fixture: ComponentFixture<JavaJacksonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaJacksonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaJacksonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
