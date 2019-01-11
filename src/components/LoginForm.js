import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUserInput = e => {
    let newName = e.target.value;
    this.setState({
      username: newName
    });
  };

  handlePassInput = e => {
    let newPass = e.target.value;
    this.setState({
      password: newPass
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      return null;
    }
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUserInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePassInput}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
