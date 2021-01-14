import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { CreateEvent } from './create-event-dialog/create-event-dialog.component'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
private _events: boolean = false;

  get events() {
    return this._events;
  }

  constructor(
    private http: HttpClient,
  ) { }

  getOtherUsersObservable() {
    return this.http.get<any>(environment.apiUrl + '/other-users');
  }

  getEventsObservable() {
    return this.http.get<any>(environment.apiUrl + '/events');
  }

  createEventObservable(createEvent: CreateEvent) {
    return this.http.post(environment.apiUrl + '/create-event', createEvent);
  }
}
