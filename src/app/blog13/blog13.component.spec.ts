import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog13Component } from './blog13.component';

describe('Blog13Component', () => {
  let component: Blog13Component;
  let fixture: ComponentFixture<Blog13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
