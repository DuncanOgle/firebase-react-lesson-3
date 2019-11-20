import React from 'react';

import firebase from '../services/firebase';

/**
 * The registration form is basically the exact same as the <LoginForm />
 * component. The only difference is that when we submit the form, we call
 * "firebase.createUser" instead of "firebase.signIn"
 */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.email || !this.state.password) {
      return;
    }

    /**
     * This is (basically) the only difference between the LoginForm and
     * RegistrationForm
     */
    firebase.createUser(this.state.email, this.state.password).catch((error) => {
      this.setState({
        errorMessage: error.message
      })
    });
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>
            Email address
            <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleEmailChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password
            <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
      </form>
    );
  }
}

export default RegistrationForm;
