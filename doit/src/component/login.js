import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

const Login = ( { history } ) => {

    return (
        <div className="form-content-left">
            <div className="login-left">
                <form className="form">
                    <div className="logo">
                        <h1>Do-it</h1>
                    </div>
                    <div className="title">
                        <h1>Login</h1>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="login-form-inputs">
                        <label htmlFor="ID" 
                        className="login-form-label">
                            아이디
                        </label>
                        <input 
                            id="ID"
                            type="text" 
                            name="ID" 
                            className='login-form-input'
                            placeholder="아이디를 입력하세요"
                            />
                    </div>
                    <br></br>
                    <div className="login-form-inputs">
                        <label htmlFor="password" 
                        className="login-form-label"
                        >
                            비밀번호
                        </label>
                        <input 
                            id="password"
                            type="password" 
                            name="password" 
                            className='login-form-input'
                            placeholder="비밀번호를 입력하세요"
                            />
                    </div>
                    <div className="auto-login">
                        <input type="checkbox"/><span>&nbsp;로그인 상태 유지</span>
                    </div>
                    <br></br>
                    <br></br>

                    <Link to="./main">
                        <button className="login-btn">
                            로그인
                        </button>
                    </Link>
                    <br></br>
                    <br></br>
                    <span className="form-input-register">
                        계정이 없으신가요? <a href="/register">여기를 눌러 생성하세요</a>
                    </span>
                </form>
            </div>      
        </div>
    );
}

export default Login;