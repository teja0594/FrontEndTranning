import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsfComponent } from './jsf.component';

describe('JsfComponent', () => {
  let component: JsfComponent;
  let fixture: ComponentFixture<JsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
