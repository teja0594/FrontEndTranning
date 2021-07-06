import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlessArchitectureComponent } from './serverless-architecture.component';

describe('ServerlessArchitectureComponent', () => {
  let component: ServerlessArchitectureComponent;
  let fixture: ComponentFixture<ServerlessArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerlessArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerlessArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
