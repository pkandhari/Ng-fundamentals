import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/events/shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-6">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" (eventClick)="handleEventClick($event)" [event]=event></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: IEvent[]
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => { this.events = events })
        this.events = this.route.snapshot.data['events']
    }

    handleEventClick(data: any) {
        console.log("Full Data Object is:")
        console.log(data)
    }

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName)
    }
}