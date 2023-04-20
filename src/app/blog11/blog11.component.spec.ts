import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog11Component } from './blog11.component';

describe('Blog11Component', () => {
  let component: Blog11Component;
  let fixture: ComponentFixture<Blog11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
