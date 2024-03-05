import { ComponentFixture, TestBed } from '@angular/core/testing';
import { N3Page } from './n3.page';

describe('N3Page', () => {
  let component: N3Page;
  let fixture: ComponentFixture<N3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(N3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
