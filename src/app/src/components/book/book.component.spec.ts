import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

    dialogData.home = homes[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // should show title
  it('should show title', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="title"]').textContent
    ).toContain('Home 1');
  });
  // shoud show price
  // should show check in date field
  // shoud show check out date field
  // should show total
  // should book home after clicking book button
});
