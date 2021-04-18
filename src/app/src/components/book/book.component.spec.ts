import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookComponent } from './book.component';
import { getElement } from '../../../../util';

import { homes } from '../../../../mocks/mockBooks';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;

  const getTestElement = (selector) => getElement(fixture, selector);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [BookComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.inject(MAT_DIALOG_DATA);
    component = fixture.componentInstance;

    dialogData.home = homes[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    expect(getTestElement('[data-test="title"]').textContent).toContain(
      'Book Home 1'
    );
  });

  it('should show price', () => {
    expect(getTestElement('[data-test="price"]').textContent).toContain(
      '$125 per night'
    );
  });

  it('should show check in date field', () => {
    expect(getTestElement('[data-test="check-in"]')).toBeTruthy();
  });

  it('should show check out date field', () => {
    expect(getTestElement('[data-test="check-out"]')).toBeTruthy();
  });

  it('should show total', () => {
    const checkIn = getTestElement('[data-test="check-in"] input');
    checkIn.value = '12/20/19';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getTestElement('[data-test="check-out"] input');
    checkOut.value = '12/23/19';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(getTestElement('[data-test="total"]').textContent).toContain(
      'Total: $375'
    );
  });

  // should book home after clicking book button
});
