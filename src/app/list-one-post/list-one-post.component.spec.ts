import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOnePostComponent } from './list-one-post.component';

describe('ListOnePostComponent', () => {
  let component: ListOnePostComponent;
  let fixture: ComponentFixture<ListOnePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOnePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOnePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
