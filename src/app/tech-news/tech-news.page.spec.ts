import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNewsPage } from './tech-news.page';

describe('TechNewsPage', () => {
  let component: TechNewsPage;
  let fixture: ComponentFixture<TechNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
