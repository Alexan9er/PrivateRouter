import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    redirectToPreviousRoute: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.logIn(
      {
        username,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true });
      }
    );
  };

  render() {
    const { location, errorMsg } = this.props;
    const { from } = location.state || { from: '/' };
    const { username, password, redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          data-field-name="username"
          type="text"
          onChange={this.handleChange}
          placeholder="Имя"
          value={username}
        />
        <input
          data-field-name="password"
          type="text"
          onChange={this.handleChange}
          placeholder="Пароль"
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default Login;
