import React from 'react';

import TodoList from '../components/TodoList';
import firebase from '../services/firebase';

/**
 * Our LoggedInPage is basically the same as our old App.js, but this time we've
 * added the SignOut button to the field instead.
 */
const LoggedIn = () => {
  return (
    <div>
      <p>Logged in. <button onClick={firebase.signOut}>Log out</button></p>
      <TodoList />
    </div>
  );
}

export default LoggedIn;
