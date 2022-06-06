import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import AccountService from "../../service/AccountService";
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  

    const navigate = useNavigate();

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = () => {
        let login = {username,
            password}
        AccountService.getAccountbyCredentials(login).then((res) => {
            console.log(res.data[0].accountType);
            localStorage.setItem("accountType", res.data[0].accountType);
            localStorage.setItem("firstname", res.data[0].firstname);
            navigate('/dashboard',{replace: true})
        })
    }


    return(
        <>
            <div>
                <h1>Login Page</h1>
                <input onChange={onChangeUsername} type={'text'} placeholder='Username' />
                <input onChange={onChangePassword} type={'password'} placeholder="Password" />
                <button onClick={onLogin}>Login Account</button>
            </div>
        </>
    )
}

export default Login;