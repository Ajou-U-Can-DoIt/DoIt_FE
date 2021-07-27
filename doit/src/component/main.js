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
            <div className="header">
                <div>
                    <span>
                        <button className="logout">
                            Logout
                        </button>
                    </span>
                </div> 
            </div>
            <div className="list">
                <h1 className="calanderName" style={{textAlign: "center"}}>조용진님의 캘린더</h1>
            </div>
            <div className="calendar">
                <Calendar
                    localizer={localizer}
                    events={myEventList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: "680px", width: "70%", float: "right", backgroundColor: "white"}}
                    />
                </div>
        </body>
        
    );
}


