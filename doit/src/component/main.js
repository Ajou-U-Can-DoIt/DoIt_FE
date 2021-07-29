import React from 'react';
import {momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import "./main.css"
import { Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);
const container = document.getElementById('calendar');
const options = {
    defaultView: 'month',          // 캘린더가 초기에 그려지는 뷰 타입을 주간 뷰로 지정
    week: {                       // 주간 뷰 시간 지정
      hourStart: 7,
      hourEnd: 18
    }
};
const calendar = new Calendar(container, options);  // 캘린더 인스턴스 생성
// const DnDCalendar = withDragAndDrop(Calendar);
const events = [{ start: new Date(), end: new Date(), title: "special event" }];
  
class Main extends React.Component {
    state = {
        events
    };
    onEventResize = (data) => {
        const { start, end } = data;
    
        this.setState((state) => {
          state.events[0].start = start;
          state.events[0].end = end;
          return { events: state.events };
        });
    };

    onEventDrop = (data) => {
        console.log(data);
    };
    render() {
        return (
            <body>
                <div className="header">
                    <div className="main-tr">
                        <p className="main-td">
                            <img className="doit-img-main" 
                                src = {process.env.PUBLIC_URL + '/image/doit.png'} 
                                alt="Do-it"/>
                            </p>
                        <p className="td txt-main">
                            <p style={{fontSize:"21px", fontWeight: "900", color: "rgb(60, 60, 60)", marginBottom:"20px"}}>Do-it Schedular </p>
                        </p>   
                    </div>   
                    <div className="message-header">
                            안녕하세요, {}님. &nbsp; 
                            <Link to="/">   
                                <button className="logout">
                                    Logout
                                </button>
                            </Link>   
                    </div>     
                </div>
                <div className="list">
                    <h1 className="calanderName" style={{textAlign: "center"}}>{ }님의 캘린더</h1>
                </div>
                <div className="calendar">
                    <Calendar
                        height="660px"
                        useCreationPopup={true}
                        useDetailPopup={true}
                        view="month"
                        />
                    </div>
            </body>
            
        );
    }
}

export default Main;

