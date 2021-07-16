export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "이름을 입력해주세요.";
    }

    if(!values.id.trim()) {
        errors.id = "ID를 입력해주세요.";
    }

    //Email
    if(!values.email) {
        errors.email = "이메일을 입력해주세요.";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "유효하지 않은 이메일 양식입니다.";
    }

    if(!values.password) {
        errors.password = "비밀번호를 입력해주세요.";
    } else if(values.password.length < 6){
        errors.password = "비밀번호는 6자리 이상이어야 합니다.";
    }

    if (!values.password2) {
        errors.password2 = "비밀번호를 입력해주세요.";
    } else if (values.password2 !== values.password) {
        errors.password2 = "비밀번호가 맞지 않습니다.";
    }

    return errors;
}