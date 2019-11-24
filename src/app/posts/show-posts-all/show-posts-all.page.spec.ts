import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostsAllPage } from './show-posts-all.page';

describe('ShowPostsAllPage', () => {
  let component: ShowPostsAllPage;
  let fixture: ComponentFixture<ShowPostsAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPostsAllPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostsAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
