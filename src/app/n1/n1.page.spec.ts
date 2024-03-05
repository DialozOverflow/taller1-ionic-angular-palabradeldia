import { ComponentFixture, TestBed } from '@angular/core/testing';
import { N1Page } from './n1.page';

describe('N1Page', () => {
  let component: N1Page;
  let fixture: ComponentFixture<N1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(N1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
