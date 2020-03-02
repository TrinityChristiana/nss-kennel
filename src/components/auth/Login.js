import React from 'react';

const Login = ({history, handleLogin, handleFieldChange, handleCheckChange}) => {
	return (
		<div>
			<fieldset>
				<h3>Please sign in</h3>
				<div className='formgrid'>
					<input
						onChange={handleFieldChange}
						type='email'
						id='email'
						placeholder='Email address'
						required=''
						autoFocus=''
					/>
					<label htmlFor='inputEmail'>Email address</label>

					<input
						onChange={handleFieldChange}
						type='password'
						id='password'
						placeholder='Password'
						required=''
					/>
					<label htmlFor='inputPassword'>Password</label>
					<input
						onChange={handleCheckChange}
						type='checkbox'
						id='remember'
						required=''
					/>
					<label htmlFor='inputRemember'>Remember Me</label>
				</div>
				<button onClick={(e) => handleLogin(e, history)}>Sign in</button>
			</fieldset>
		</div>
	);
};

export default Login;
