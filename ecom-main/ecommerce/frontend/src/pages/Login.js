import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn-submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button onClick={toggleAuthMode} className="btn-toggle">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
