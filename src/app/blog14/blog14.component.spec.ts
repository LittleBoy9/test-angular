import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog14Component } from './blog14.component';

describe('Blog14Component', () => {
  let component: Blog14Component;
  let fixture: ComponentFixture<Blog14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
