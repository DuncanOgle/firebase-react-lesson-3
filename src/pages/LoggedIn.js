import React from 'react';

import TodoList from '../components/TodoList';
import firebase from '../services/firebase';

const LoggedIn = () => {
  return (
    <div>
      <p>Logged in. <button onClick={firebase.signOut}>Log out</button></p>
      <TodoList />
    </div>
  );
}

export default LoggedIn;
