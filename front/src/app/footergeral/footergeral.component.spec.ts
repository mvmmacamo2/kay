import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergeralComponent } from './footergeral.component';

describe('FootergeralComponent', () => {
  let component: FootergeralComponent;
  let fixture: ComponentFixture<FootergeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootergeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootergeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
