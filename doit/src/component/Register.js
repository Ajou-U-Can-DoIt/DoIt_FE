import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import "./Register.css";

const Register = ( {submitForm } ) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    return (
        <div className='form-content-left'>
            <div className="left">
                <form className='form' onSubmit={handleSubmit}>
                    <div className="logo">
                        <img className="doit-img" src = {process.env.PUBLIC_URL + '/image/doit.png'} alt="Do-it"/>
                        <p style={{fontSize: '30px', marginTop:'40px', float:'left'}}>&nbsp;Do-it</p>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="title">
                        <h1>Sign in</h1>
                    </div>
                <div className="form-inputs">
                    <label htmlFor="username"
                    className="form-label">
                        이름
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="이름 입력"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="id"
                    className="form-label">
                        아이디
                    </label>
                    <input
                    id="id"
                    type="text"
                    name="id"
                    className="form-input"
                    placeholder="아이디 입력"
                    value={values.id}
                    onChange={handleChange}
                    />
                    {errors.id && <p>{errors.id}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password"
                    className="form-label">
                        비밀 번호      
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="비밀 번호 입력"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2"
                    className="form-label" >
                        비밀 번호(확인)
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="비밀 번호 입력"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className="form-inputs" f>
                    <label htmlFor="email"
                    className="form-label">
                        이메일
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="이메일 입력"
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <br></br>
                    <button className="form-input-btn"
                    type="submit">
                        회원 가입
                    </button>
                    <br></br>
                    <br></br>
                    <span className="form-input-register">
                        이미 계정이 있으신가요? <a href="/login">로그인</a>
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </form>
            </div>
        </div>
    );
}

export default Register;