import React from 'react';

import firebase from './services/firebase';
import LoggedInPage from './pages/LoggedIn';
import LoggedOutPage from './pages/LoggedOut';

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
    return (
      <div className="container">
        <h1>Firebase Todo List</h1>
        {this.state.isLoggedIn && <LoggedInPage />}
        {!this.state.isLoggedIn && <LoggedOutPage />}
      </div>
    );
    /**
     * The use of "&&" above is a short hand way of doing "inline" conditionals.
     * This code would be the equivalent of doing something like this;
     *
     * if (this.state.isLoggedIn) {
     *   return (
     *     <div className="container">
     *       <h1>Firebase Todo List</h1>
     *       <LoggedInPage />
     *     </div>
     *   );
     * }
     *
     * return (
     *   <div className="container">
     *     <h1>Firebase Todo List</h1>
     *     <LoggedOutPage />
     *   </div>
     * );
     */
  }
}

export default App;
