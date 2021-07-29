import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import "./main.css"
import { Link } from 'react-router-dom';
  
const getDate = (type, start, value, operator) => {
    start = new Date(start);
    type = type.charAt(0).toUpperCase() + type.slice(1);
  
    if (operator === "+") {
      start[`set${type}`](start[`get${type}`]() + value);
    } else {
      start[`set${type}`](start[`get${type}`]() - value);
    }
  
    return start;
};

export default class Main extends React.Component {

    calendarInstance = null;
    calendarRef = React.createRef();


    state = {
        dateRange: "",
        view: "week",
        viewModeOptions: [
          {
            title: "Monthly",
            value: "month"
          },
          {
            title: "Weekly",
            value: "week"
          },
          {
            title: "Daily",
            value: "day"
          }
        ]
    };

    componentDidMount() {
        this.calendarInst = this.calendarRef.current.getInstance();
        this.setState({ view: this.props.view });
    
        this.setRenderRangeText();
    }
    
    onChangeSelect(ev) {
        this.setState({ view: ev.target.value });
    
        this.setRenderRangeText();
    }

    onClickNavi(event) {
        if (event.target.tagName === "BUTTON") {
          const { target } = event;
          let action = target.dataset
            ? target.dataset.action
            : target.getAttribute("data-action");
          action = action.replace("move-", "");
    
          this.calendarInst[action]();
          this.setRenderRangeText();
        }
    }

    setRenderRangeText() {
        const view = this.calendarInst.getViewName();
        const calDate = this.calendarInst.getDate();
        const rangeStart = this.calendarInst.getDateRangeStart();
        const rangeEnd = this.calendarInst.getDateRangeEnd();
        let year = calDate.getFullYear();
        let month = calDate.getMonth() + 1;
        let date = calDate.getDate();
        let dateRangeText = "";
        let endMonth, endDate, start, end;
    
        switch (view) {
          case "month":
            dateRangeText = `${year}-${month}`;
            break;
          case "week":
            year = rangeStart.getFullYear();
            month = rangeStart.getMonth() + 1;
            date = rangeStart.getDate();
            endMonth = rangeEnd.getMonth() + 1;
            endDate = rangeEnd.getDate();
    
            start = `${year}-${month < 10 ? "0" : ""}${month}-${
              date < 10 ? "0" : ""
            }${date}`;
            end = `${year}-${endMonth < 10 ? "0" : ""}${endMonth}-${
              endDate < 10 ? "0" : ""
            }${endDate}`;
            dateRangeText = `${start} ~ ${end}`;
            break;
          default:
            dateRangeText = `${year}-${month}-${date}`;
        }
    
        this.setState({ dateRange: dateRangeText });
    }

    handleClickPrevButton = () => {
        const calendarInstance = this.calendarRef.current.getInstance();
    
        calendarInstance.prev();
    };

    handleClickNextButton = () => {
        const calendarInstance = this.calendarRef.current.getInstance();
    
        calendarInstance.next();
    };

    handleClickTodayButton = () => {
        const calendarInstance = this.calendarRef.current.getInstance();
    
        calendarInstance.today();
    };

    render() {
        const { dateRange, view, viewModeOptions } = this.state;
        const selectedView = view || this.props.view;
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
                <div className="calendar-header">
                    <button type="button"
                    className="btn-move-today"
                    data-action="move-today"
                    onClick={this.onClickNavi.bind(this)}>Today</button>
                    <button type="button"
                    className="btn-move-prev"
                    data-action="move-prev"
                    onClick={this.onClickNavi.bind(this)}>이전 달</button>
                    <button type="button"
                    className="btn-move-next"
                    data-action="move-next"
                    onClick={this.onClickNavi.bind(this)}>다음 달</button>
                    <span className="render-range">{dateRange}</span>
                </div>
                <div className="calendar">
                    <Calendar
                        ref={this.calendarRef}
                        height="620px"
                        useCreationPopup={true}
                        useDetailPopup={true}
                        view="month"
                        theme="MONTHLY_CUSTOM_THEME"
                        timezones={[
                            {
                              timezoneOffset: 540,
                              displayLabel: 'GMT+09:00',
                              tooltip: 'Seoul'
                        }]}
                        />
                    </div>
            </body>
            
        );
    }
}
