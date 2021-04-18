import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { spyOnClass } from 'jasmine-es6-spies';

import { HomesComponent } from './homes.component';
import { DataService } from './../../services/data.service';
import { DialogService } from '../../services/dialog.service';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomesComponent],
      providers: [
        { provide: DataService, useFactory: () => spyOnClass(DataService) },
        { provide: DialogService, useFactory: () => spyOnClass(DialogService) },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    dataService = TestBed.inject(DataService) as any;

    const homes = [
      {
        title: 'Home 1',
        image: 'assets/listing.jpg',
        location: 'New York',
      },
      {
        title: 'Home 2',
        image: 'assets/listing.jpg',
        location: 'Boston',
      },
      {
        title: 'Home 3',
        image: 'assets/listing.jpg',
        location: 'Chicago',
      },
    ];
    dataService.getHomes$.and.returnValue(of(homes));

    dialogService = TestBed.inject(DialogService) as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show homes', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="home"]').length
    ).toBe(3);
  });

  it('should show home info', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="title"]').innerText).toEqual(
      'Home 1'
    );
    expect(home.querySelector('[data-test="location"]').innerText).toEqual(
      'New York'
    );
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();
  });

  it('should show book button', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="book-btn"]')).toBeTruthy();
  });

  it('should use dialog service to open a dialog when clicking on book button', () => {
    const bookButton = fixture.nativeElement.querySelector(
      '[data-test="home"] button'
    );

    bookButton.click();
    expect(dialogService.open).toHaveBeenCalled();
  });
});
