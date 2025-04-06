import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = '/api/random';

  constructor(private http: HttpClient) {}

  getActivity(): Observable<Activity> {
    return this.http.get<Activity>(this.apiUrl);
  }
}
