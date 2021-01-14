import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from '../events/events.service';
import { AuthService } from '../auth/auth.service';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';

export interface Event {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  allowedUsers: number,
}

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.css']
})
export class EventsPage implements OnInit {

  dataSource: Event[];
  displayedColumns = [
    'nr',
    'title',
    'description',
    'startDate',
    'endDate',
    'allowedUsers'
  ];
  isTableLoading = false;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private eventsService: EventsService
    ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.isTableLoading = true;
    this.eventsService.getEventsObservable()
      .subscribe(
        (data) => {
          if (data) {
            let dataToArray: Event[] = [];
            for (var key in data) {
              dataToArray.push(data[key] as Event);
            }
            this.dataSource = dataToArray;
            this.isTableLoading = false;
          }
        },
        (error) => {
          this.isTableLoading = false;
          console.log(error);
        }
      );
  }

  logout() {
    this.authService.logout();
  }

  openDialog() {
    let dialogRef = this.dialog.open(CreateEventDialogComponent, {
      width: '500px',
      height: '460px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEvents();
    });
  }
}
