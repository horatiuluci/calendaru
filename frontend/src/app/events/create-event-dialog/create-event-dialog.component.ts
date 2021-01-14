import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../events.service';

export interface CreateEvent {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  allowedUsers: [];
}

export interface AllowedUser {
  username: string;
  userToEvent: string;
}

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.css']
})
export class CreateEventDialogComponent implements OnInit {

  createEventForm: any;
  otherAllowedUsers: AllowedUser[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateEventDialogComponent>,
    private eventsService: EventsService,
    private formBuilder: FormBuilder
  ) {
      this.createEventForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        allowedUsers: [[]]
      });

  }

  ngOnInit() { 
    this.getOtherUsers();
  }

  getOtherUsers() {
    this.eventsService.getOtherUsersObservable()
      .subscribe(
        (data) => {
          this.otherAllowedUsers = data as AllowedUser[];
        }
      );
  }

  createEvent() {
    if (this.createEventForm.invalid) {
      return;
    }

    let createdEvent = this.createEventForm.value as CreateEvent;
    this.eventsService.createEventObservable(createdEvent)
      .subscribe(
        (data) => {
          this.dialogRef.close();
        }
      )
  }
}
