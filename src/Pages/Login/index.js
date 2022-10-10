import React ,{useState} from 'react'
import './style.css'; 


function Login() {
    const initialvalues = {username:"", password:""}
    const [regValues, setRegValues] = useState(initialvalues);
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setRegValues({...regValues, [name]:value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(regValues);
    }
  return (
    <div className='loginpanel'>
<div className="container" id="container">

	<div className="form-container sign-in-container">
		<form onSubmit={onSubmit}>
			<h2>Registration Form</h2>
				<br></br>
			<input type="text" name="username" value={regValues.username} onChange={handleChange} placeholder="Username" />
			<input type="password" name="password" value={regValues.password} onChange={handleChange} placeholder="Password" />
            <br></br>
			<button>Register</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
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