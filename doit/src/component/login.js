import axios from 'axios';
import { Link } from 'react-router-dom';
import "./login.css";
import React, {Component} from 'react';

export default class login extends Component {

    handleSubmit = e => { 
        e.preventDefault();
    
        axios.post('http://ec2-3-37-170-98.ap-northeast-2.compute.amazonaws.com:8080/user/login', {
            pwd: this.password,
            userName: this.id
        }).then(res => {
            console.log(res);
            if(res.data.success === true) {
                window.alert("로그인 되었습니다.")
                window.location.replace('/main/%{nickName}');
            }
            else {
                window.alert(res.data.data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    
    }
    
    render() {
        return (
            <div className="form-content-left">
                <div className="login-left">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="logo">
                            <Link to="/">
                                <img className="doit-img" src = {process.env.PUBLIC_URL + '/image/doit.png'} alt="Do-it"/>
                            </Link>
                            <p style={{fontWeight: "bolder", fontSize: '30px', marginTop:'40px', float:'left'}}>&nbsp;Do-it</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="title">
                            <br></br>
                            <h1>Login</h1>
                        </div>
                        <br></br>
                        <br></br>
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
                                onChange={e => this.id = e.target.value}
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
                                onChange={e => this.password = e.target.value}
                                />
                        </div>
                        
                        <br></br>
                        <br></br>
                        <Link to= {{
                            pathname: '/main',
                            state: {
                                nickName: this.userusername
                            }
                        }}>
                            <button className="login-btn" 
                            type="submit">
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
}


