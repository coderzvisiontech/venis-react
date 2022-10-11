import React ,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style.css'; 


function Login() {
    const initialvalues = {username:"", password:""}
    const [loginValues, setLoginValues] = useState(initialvalues);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setLoginValues({...loginValues, [name]:value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(loginValues);
        const user = {
            username: loginValues.username,
            password: loginValues.password
          };
      
          axios.post('http://44.204.12.25:3200/api/v1/students/login', user)
            .then(res => {
              console.log(res);
              setIsLogin(false);
              navigate("/mock");

            }).catch(error => {
              console.log(error);
              setIsLogin(true);
            });

    }
  return (
    <div className='loginpanel'>
<div className="container" id="container">

	<div className="form-container sign-in-container">
		<form onSubmit={onSubmit}>
			<h2>Login Form</h2>
				<br></br>
			<input type="text" name="username" value={loginValues.username} onChange={handleChange} placeholder="Username" />
			<input type="password" name="password" value={loginValues.password} onChange={handleChange} placeholder="Password" />
      {isLogin ? <span className='error-message'>Invalid Credentials</span> : null}
            <br></br>
			<button>Login</button>
            <br></br>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
                <img src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7855.jpg" className='imageCls'/>
				<h1>Ridhima</h1>
				<p>To keep connected with us please login with ridhima</p>
			</div>
		</div>
	</div>
</div>
    </div>
      );
    }

export default Login
