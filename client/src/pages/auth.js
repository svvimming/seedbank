import React from 'react';
import { Link } from 'react-router-dom';
import AuthLogin from '../components/AuthLogin';
import AuthSignup from '../components/AuthSignup';
import AuthLogout from '../components/AuthLogout';
import Signature from '../components/Signature';

//add suspend to signature component

const AuthPage = () => {
	return (
		<div>
			<AuthLogin/>
			<br/><br/>
			<AuthSignup/>
			<br/><br/>
			<Link to='/'>Back to entryway</Link>
			<br/><br/>
			<AuthLogout/>
			<br/><br/>
			<Signature
			offTop = {100}
			/>
		</div>
	);
}

export default AuthPage;
