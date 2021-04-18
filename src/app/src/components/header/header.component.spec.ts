import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { getElement } from '../../../../util';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const getTestElement = (selector) => getElement(fixture, selector);

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
    const element = getTestElement('[data-test="logo"]');
    expect(element).toBeTruthy();
  });

  it('should show search', () => {
    const element = getTestElement('[data-test="search"]');
    expect(element).toBeTruthy();
  });

  it('should show menu', () => {
    const element = getTestElement('[data-test="menu"');
    expect(element).toBeTruthy();
  });

  it('should show filters', () => {
    expect(getTestElement('[data-test="home-type"]')).toBeTruthy();
    expect(getTestElement('[data-test="dates"]')).toBeTruthy();
    expect(getTestElement('[data-test="guests"]')).toBeTruthy();
    expect(getTestElement('[data-test="price"]')).toBeTruthy();
    expect(getTestElement('[data-test="rooms"]')).toBeTruthy();
    expect(getTestElement('[data-test="amenities"]')).toBeTruthy();
  });
});
