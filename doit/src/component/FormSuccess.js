import React from 'react'
import { Link } from 'react-router-dom'

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                We have received your request.
            </div>
            <Link to="./login">
                <button>
                    로그인 페이지로 이동
                </button>
            </Link> 
        </div>
    )
}

export default FormSuccess