import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog12Component } from './blog12.component';

describe('Blog12Component', () => {
  let component: Blog12Component;
  let fixture: ComponentFixture<Blog12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
