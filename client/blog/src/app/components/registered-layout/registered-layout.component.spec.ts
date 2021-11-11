import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredLayoutComponent } from './registered-layout.component';

describe('RegisteredLayoutComponent', () => {
  let component: RegisteredLayoutComponent;
  let fixture: ComponentFixture<RegisteredLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
