import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsByCategoryPage } from './posts-by-category.page';

describe('PostsByCategoryPage', () => {
  let component: PostsByCategoryPage;
  let fixture: ComponentFixture<PostsByCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsByCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsByCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
