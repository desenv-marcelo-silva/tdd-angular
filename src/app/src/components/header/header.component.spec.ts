import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const getElement = (selector) =>
    fixture.nativeElement.querySelector(selector);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show logo', () => {
    const element = getElement('[data-test="logo"]');
    expect(element).toBeTruthy();
  });

  it('should show search', () => {
    const element = getElement('[data-test="search"]');
    expect(element).toBeTruthy();
  });

  it('should show menu', () => {
    const element = getElement('[data-test="menu"');
    expect(element).toBeTruthy();
  });

  it('should show filters', () => {
    expect(getElement('[data-test="home-type"]')).toBeTruthy();
    expect(getElement('[data-test="dates"]')).toBeTruthy();
    expect(getElement('[data-test="guests"]')).toBeTruthy();
    expect(getElement('[data-test="price"]')).toBeTruthy();
    expect(getElement('[data-test="rooms"]')).toBeTruthy();
    expect(getElement('[data-test="amenities"]')).toBeTruthy();
  });
});
