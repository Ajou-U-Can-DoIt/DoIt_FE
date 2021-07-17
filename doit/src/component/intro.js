import React from 'react';
import "./intro.css";
import { Link } from 'react-router-dom';

const intro = ( { history } ) => {

    return (
        <div className="logo-intro">
            <div className="tr">
                <p className="td">
                    <img className="doit-img-intro" 
                    src = {process.env.PUBLIC_URL + '/image/doit.png'} 
                    alt="Do-it"/>
                </p>
                <p className="td txt">
                    <p style={{fontSize:"55px", marginTop: "20px", marginBottom:"20px", fontWeight: "900", color: "rgb(60, 60, 60)"}}>Do-it Schedular </p>
                    <p style={{fontSize:"35px", marginTop: "20px", marginBottom:"20px", fontWeight: "700", color: "rgb(150, 150, 150)"}}>For your smart scheduling</p>
                </p>
            </div>
            <Link to="/login">
                <button className="start-btn">
                    Start
                </button>
            </Link>
        </div>
    );
}

export default intro;