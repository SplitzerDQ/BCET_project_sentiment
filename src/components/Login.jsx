import React from 'react';

const Login = () => (
  <div className="login-container">
    <h2>Login</h2>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
