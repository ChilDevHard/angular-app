import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isDevMode } from '@angular/core';

export interface Activity {
  activity: string;
  availability: number;
  type: string;
  participants: number;
  price: number;
  accessibility: string;
  duration: string;
  kidFriendly: boolean;
  link?: string;
  key: string;
}


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = isDevMode()
  ? '/api/random'
  : 'https://bored-api.appbrewery.com/random';

  constructor(private http: HttpClient) {}

  getActivity(): Observable<Activity> {
    return this.http.get<Activity>(this.apiUrl);
  }
}
