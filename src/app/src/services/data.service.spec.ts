import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let dataService: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should return the list of homes', () => {
    // Spy on and mock the HttpClient
    httpClient = TestBed.get(HttpClient);
    const homesMock = [
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
    spyOn(httpClient, 'get').and.returnValue(of(homesMock));

    // Use our service to get homes.
    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');

    dataService.getHomes$().subscribe(spy);

    // Verify that service returned mocked data
    expect(spy).toHaveBeenCalledWith(homesMock);

    // verify that the service called the proper http endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});
