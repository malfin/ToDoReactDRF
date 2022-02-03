import React, {useState} from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function Submit(e) {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/v1/token/`, {
            username: username,
            password: password,
        })
            .then((result) => {
                // console.log(result.data);
                localStorage.setItem('user', result.config.data);
                localStorage.setItem('token', result.data.access);
                // window.location = "/"
            })
            .catch((result) => {
                console.log(result)
            })
    }


    return (
        <div className="card">
            <form className="m-3" onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Имя пользователя</label>
                    <input type="text" className="form-control" id="username"
                           placeholder="Имя пользователя" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input type="password" className="form-control" id="password"
                           placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-block btn-primary" type="submit">Войти</button>
            </form>
        </div>
    )
}
export default LoginForm