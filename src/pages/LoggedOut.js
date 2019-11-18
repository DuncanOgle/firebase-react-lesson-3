import React from 'react';

import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

const LoggedOut = () => {
  return (
    <div>
      <p>You are logged out.</p>
      <h2>Login</h2>
      <LoginForm />
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
}

export default LoggedOut;
