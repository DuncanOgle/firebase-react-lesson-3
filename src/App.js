import React from 'react';

import firebase from './services/firebase';
import LoggedInPage from './pages/LoggedIn';
import LoggedOutPage from './pages/LoggedOut';

/**
 * When we wanted to update this to be a class component, we can look towards
 * our "TodoList" component. This was already a class component and
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: firebase.isLoggedIn()
    }
  }

  componentDidMount() {
    firebase.onLoginChange((user) => {
        if (user) {
          this.setState({ isLoggedIn: true });
        } else {
          this.setState({ isLoggedIn: false });
        }
    })
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="container">
          <h1>Firebase Todo List</h1>
          <LoggedInPage />
        </div>
      );
    }

    return (
      <div className="container">
        <h1>Firebase Todo List</h1>
        <LoggedOutPage />
      </div>
    );
    /**
     * If we wanted to, we could take advantage of "&&" which is a short hand
     * way of doing "inline" conditionals. This code would look something like
     * this;
     *
     * return (
     *   <div className="container">
     *     <h1>Firebase Todo List</h1>
     *     {this.state.isLoggedIn && <LoggedInPage />}
     *     {!this.state.isLoggedIn && <LoggedOutPage />}
     *   </div>
     * );
     */
  }
}

export default App;
