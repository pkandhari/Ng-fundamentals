import { getCurrencySymbol } from '@angular/common';
import { SelectorContext } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
    <h1>{{event?.name}}</h1>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
        <button (click)="handleClickMe()">Click Me!</button>
    </div>
    `,
    styles: [`
    .bold{font-weight:bold}
    .black{color:black !important}
    .yellow{color:yellow !important}
    .red {color: red !important}
    .thumbnail { min-height: 250px;}
    .pad-left{margin-left:10px;}
    .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event);
        // console.log("I am clicked");
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am')
            return 'yellow bold';
        else if (this.event && this.event.time === '10:00 am')
            return 'red bold';
        else
            return 'black bold';
    }
}