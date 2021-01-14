import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { CreateEventDialogComponent } from './create-event-dialog/create-event-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EventsPageRoutingModule
  ],
  declarations: [EventsPage, CreateEventDialogComponent],
  entryComponents: [
    CreateEventDialogComponent
  ],
})
export class EventsPageModule { }
