import React from 'react';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from './validateInfo';
import "./Form.css";

const Register = ( {submitForm } ) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>회원가입 화면</h1>
            <div className="form-inputs">
                <label htmlFor="username"
                className="form-label">
                    이름
                </label>
                <br></br>
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
                <br></br>
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
                <br></br>
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
                <br></br>
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
                <br></br>
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
            </form>
        </div>
    );
}

export default Register;