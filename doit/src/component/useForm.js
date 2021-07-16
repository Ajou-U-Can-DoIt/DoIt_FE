import { useState, useEffect, callback } from "react";
import axios from "axios";

const baseUrl = "http://ec2-3-37-170-98.ap-northeast-2.compute.amazonaws.com:8080";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        id: '',
        password: '',
        password2: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true); 
        setErrors(validate(values));
    };
    
    useEffect (() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            alert("회원가입이 완료되었습니다.");
            axios.post(baseUrl + "/user/signup", {
                email: values.email,
                nickname: values.username,
                pwd: values.password,
                userName: values.id
            }).then(
                res => {
                    console.log(res);
                }
            ).catch(
                err => {
                    console.log(err);
                }
            )
            window.location.replace('/login');
        }
    }, [callback, errors, isSubmitting, values.email, values.id, values.password, values.username]);
    return { handleChange, values, handleSubmit, errors};
};

export default useForm;