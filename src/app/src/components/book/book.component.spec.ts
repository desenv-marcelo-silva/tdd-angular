import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { of } from 'rxjs';
import { spyOnClass } from 'jasmine-es6-spies';

import { BookComponent } from './book.component';
import { getElement } from '../../../../util';

import { homes } from '../../../../mocks/mockBooks';
import { DataService } from './../../services/data.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let notificationService: jasmine.SpyObj<MatSnackBar>;

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
        { provide: DataService, useFactory: () => spyOnClass(DataService) },
        { provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef) },
        { provide: MatSnackBar, useFactory: () => spyOnClass(MatSnackBar) },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    dialogData = TestBed.inject(MAT_DIALOG_DATA);
    component = fixture.componentInstance;

    dialogData.home = homes[0];
    dataService = TestBed.inject(DataService) as any;
    dialogService = TestBed.inject(MatDialogRef) as any;
    notificationService = TestBed.inject(MatSnackBar) as any;
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

  it('should book home after clicking book button', () => {
    dataService.bookHome$.and.returnValue(of(null));

    const checkIn = getTestElement('[data-test="check-in"] input');
    checkIn.value = '12/20/19';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getTestElement('[data-test="check-out"] input');
    checkOut.value = '12/23/19';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    getTestElement('[data-test="book-btn"] button').click();

    expect(dataService.bookHome$).toHaveBeenCalled();
  });

  it('should close the dialog and shot notification after clicking Book button', () => {
    dataService.bookHome$.and.returnValue(of(null));
    const checkIn = getTestElement('[data-test="check-in"] input');
    checkIn.value = '12/20/19';
    checkIn.dispatchEvent(new Event('input'));

    const checkOut = getTestElement('[data-test="check-out"] input');
    checkOut.value = '12/23/19';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    getTestElement('[data-test="book-btn"] button').click();

    expect(dialogService.close).toHaveBeenCalled();
    expect(notificationService.open).toHaveBeenCalled();
  });
});
