import React from 'react';
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./main.css"

const localizer = momentLocalizer(moment);

const myEventList = [{ start: new Date(), end: new Date(), title: "special event"}];

export default function Main() {
    return (
        <body>
            <div className="calendar">
                <Calendar
                    localizer={localizer}
                    events={myEventList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: 700, width: 1000, display: "inline-block", float: "right"}}
                    />
                </div>
        </body>
        
    );
}


