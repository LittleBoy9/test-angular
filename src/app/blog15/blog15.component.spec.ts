import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog15Component } from './blog15.component';

describe('Blog15Component', () => {
  let component: Blog15Component;
  let fixture: ComponentFixture<Blog15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
