import React from 'react';
import { Link } from 'react-router-dom';

const login = ( { history } ) => {

    return (
        <div>
            <h3> 로그인 화면 </h3>
            <text>계정이 없으신가요?</text>
            <Link to='/register'>여기를 눌러 생성하세요.</Link>
        </div>
    );
}

export default login;