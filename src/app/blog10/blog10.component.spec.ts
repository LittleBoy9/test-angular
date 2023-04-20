import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog10Component } from './blog10.component';

describe('Blog10Component', () => {
  let component: Blog10Component;
  let fixture: ComponentFixture<Blog10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
