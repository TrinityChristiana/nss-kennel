import React, {useState, useEffect} from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

import './Kennel.css';

const Kennel = () => {
	const [hasUser, setuser] = useState(true);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		remember: false
	});

	const clearUser = () => {
		sessionStorage.clear();
		localStorage.clear();
		setuser(isAuthenticated());
	};

	// Update state whenever an input field is edited
	const handleFieldChange = evt => {
		const stateToChange = {...credentials};
		stateToChange[evt.target.id] = evt.target.value;
		setCredentials(stateToChange);
	};

	const handleCheckChange = evt => {
		const stateToChange = {...credentials};
		stateToChange[evt.target.id] = evt.target.checked;
		setCredentials(stateToChange);
	};
	const isAuthenticated = () =>
		sessionStorage.getItem('credentials') !== null ||
		localStorage.getItem('credentials') !== null;

	useEffect(() => {
		setuser(isAuthenticated());
	}, []);

	const checkLoggedIn = () => {
		setuser(isAuthenticated());
	};

	const handleLogin = (e, history) => {
		e.preventDefault();

		if (credentials.email === '' || credentials.password === '') {
			alert('please enter your password and email');
		} else {
			credentials.remember
				? localStorage.setItem(
						'credentials',
						JSON.stringify(credentials)
				  )
				: sessionStorage.setItem(
						'credentials',
						JSON.stringify(credentials)
				  );

			// history.push('/');
			setuser(isAuthenticated());
		}
		/*
          For now, just store the email and password that
          the customer enters into session storage.
          ...Let's just trust the user... That's a good idea, right????
          
      */
	};

	return (
		<>
			<NavBar hasUser={hasUser} clearUser={clearUser} />
			<ApplicationViews
				checkLoggedIn={checkLoggedIn}
				hasUser={hasUser}
				handleLogin={handleLogin}
				credentials={credentials}
				handleFieldChange={handleFieldChange}
				handleCheckChange={handleCheckChange}
				isAuthenticated={hasUser}
			/>
		</>
	);
};

export default Kennel;
