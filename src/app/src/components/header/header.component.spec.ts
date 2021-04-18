import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    const element = fixture.nativeElement.querySelector('[data-test="logo"]');
    expect(element).toBeTruthy();
  });

  it('should show search', () => {
    const element = fixture.nativeElement.querySelector('[data-test="search"]');
    expect(element).toBeTruthy();
  });

  it('should show menu', () => {
    const element = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(element).toBeTruthy();
  });
});
