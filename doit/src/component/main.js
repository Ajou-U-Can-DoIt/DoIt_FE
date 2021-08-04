import React, {useCallback} from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import "./main.css"
import { Link} from 'react-router-dom';
import Select from "react-select/creatable";

const options = [
  { value: 'MyCalendar', label: '내 캘린더' },
];

const nickname = localStorage.getItem('nickname')
export default class Main extends React.Component {
    calendarInstance = null;
    calendarRef = React.createRef();

    state = {
        selectedOption: null,
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
    handleChange = (selectedOption) => {
      this.setState({selectedOption}, () =>
        console.log('Option selected:', this.state.selectedOption)
        );
    };
    componentDidMount() {
        this.calendarInst = this.calendarRef.current.getInstance();
        this.setState({ view: this.props.view });
    
        this.setRenderRangeText();
    }

    onAfterRenderSchedule(res) {
      console.group("onAfterRenderSchedule");
      console.log("Schedule Info : ", res.schedule);
      console.groupEnd();
    }

    onBeforeDeleteSchedule(res) {
      console.group("onBeforeDeleteSchedule");
      console.log("Schedule Info : ", res.schedule);
      console.groupEnd();
  
      const { id, calendarId } = res.schedule;
  
      this.calendarInst.deleteSchedule(id, calendarId);
    }
    
    onChangeSelect(ev) {
        this.setState({ view: ev.target.value });
    
        this.setRenderRangeText();
    }

    onClickDayname(res) {
      console.group("onClickDayname");
      console.log(res.date);
      console.groupEnd();
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

    onClickSchedule(res) {
      console.group("onClickSchedule");
      console.log("MouseEvent : ", res.event);
      console.log("Calendar Info : ", res.calendar);
      console.log("Schedule Info : ", res.schedule);
      console.groupEnd();
    }

    setRenderRangeText() {
        const calDate = this.calendarInst.getDate();
        let year = calDate.getFullYear();
        let month = calDate.getMonth() + 1;
        let dateRangeText = "";
    
        dateRangeText = `${year}-${month}`;
        this.setState({ dateRange: dateRangeText });
    }

    onBeforeUpdateSchedule(event) {
      const { schedule } = event;
      const { changes } = event;
  
      this.calendarInst.updateSchedule(schedule.id, schedule.calendarId, changes);
    }

    
  onBeforeCreateSchedule(scheduleData) {
    const { calendar } = scheduleData;
    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      raw: {
        class: scheduleData.raw["class"]
      },
      state: scheduleData.state
    };

    if (calendar) {
      schedule.calendarId = calendar.id;
      schedule.color = calendar.color;
      schedule.bgColor = calendar.bgColor;
      schedule.borderColor = calendar.borderColor;
    }

    this.calendarInst.createSchedules([schedule]);
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
        const { selectedOption, dateRange, view, viewModeOptions } = this.state;
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
                      안녕하세요, {nickname}님. &nbsp; 
                            <Link to="/">   
                                <button className="logout">
                                    Logout
                                </button>
                            </Link>   
                    </div>     
                </div>
                <div className="list">
                  <div className="calendar-container">
                    <Select className="calendar-name"
                      value={selectedOption}
                      options={options}
                      onChange={this.handleChange}
                      theme={theme => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: 'gray',
                        primary: 'black',
                      },
                      })}>calendar</Select>
                      <div className="sp-add-calendar">
                        <button className="add-calendar">
                          캘린더 추가
                        </button>
                          <button className="add-schedule">
                            일정 추가
                          </button>
                      </div>
                  </div>
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
                    <span className="render-range"
                    style={{textAlign: "center"}}>{dateRange}</span>
                </div>
                <div className="calendar">
                    <Calendar
                        usageStatistics={false}
                        calendars={[
                          {
                            id: "0",
                            name: "Private",
                            bgColor: "#9e5fff",
                            borderColor: "#9e5fff"
                          },
                          {
                            id: "1",
                            name: "Company",
                            bgColor: "#00a9ff",
                            borderColor: "#00a9ff"
                          }
                        ]}
                        ref={this.calendarRef}
                        height="610px"  
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
                        scheduleView
                        taskView
                        onAfterRenderSchedule={this.onAfterRenderSchedule.bind(this)}
                        onBeforeDeleteSchedule={this.onBeforeDeleteSchedule.bind(this)}
                        onBeforeCreateSchedule={this.onBeforeCreateSchedule.bind(this)}
                        onClickDayname={this.onClickDayname.bind(this)}
                        onClickSchedule={this.onClickSchedule.bind(this)}
                        onBeforeUpdateSchedule={this.onBeforeUpdateSchedule.bind(this)}
                        />
                    </div>
            </body>
            
        );
    }
}
