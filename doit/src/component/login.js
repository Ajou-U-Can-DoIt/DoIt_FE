import React from 'react';
import { Link } from 'react-router-dom';

const Login = ( { history } ) => {

    return (
        <div className="form-content-right">
            <form className="form">
                <h3> 로그인 화면 </h3>
                <div className="form-inputs">
                    <label htmlFor="ID" className="form-label">
                        아이디
                    </label>
                    <br></br>
                    <input 
                        id="ID"
                        type="text" 
                        name="ID" 
                        className='form-input'
                        placeholder="Enter your ID"
                        />
                </div>
                <br></br>
                <div className="form-inputs">
                    <label htmlFor="password" 
                    className="form-label">
                        비밀번호
                    </label>
                    <br></br>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className='form-input'
                        placeholder="Enter your Password"
                        />
                </div>
                <br></br>
                <Link to="./main">
                    <button>
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
    );
}

export default Login;