
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const ADMIN_PASSWORD = 'admin123';  

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '', role: 'user' });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();  

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleForgotPasswordChange = (e) => {
    setForgotPasswordEmail(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);

    
    if (loginData.role === 'admin') {
      if (loginData.password === ADMIN_PASSWORD) {
        navigate('/admin-panel');
      } else {
        setLoginError('Invalid password for admin.');
      }
    } else {
      navigate('/user-panel');
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password Email:', forgotPasswordEmail);
    setShowForgotPassword(false);
  };

  return (
    <section className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLoginSubmit}>
       <div className='log-con'>
       <input
       type="email"
       name="email"
       placeholder="Email"
       value={loginData.email}
       onChange={handleLoginChange}
       required
     />
     <input
       type="password"
       name="password"
       placeholder="Password"
       value={loginData.password}
       onChange={handleLoginChange}
       required
     />
     <select name="role" value={loginData.role} onChange={handleLoginChange} required>
       <option value="user">User</option>
       <option value="admin">Admin</option>
     </select>
     <button type="submit">Login</button>
     {loginError && <p className="login-error">{loginError}</p>}
     <div className="login-footer">
     <div class="forgot-password-link">
     <a href="/forgot-password">Forgot Password?</a>
   </div>
       <div class="signup-link">
       <a href="/signup">Sign Up</a>
     </div>
     </div>
       </div>
      </form>

      {showForgotPassword && (
        <div className="forgot-password-modal">
          <div className="forgot-password-content">
            <h5>Forgot Password</h5>
            <form onSubmit={handleForgotPasswordSubmit}>
              <input
                type="email"
                name="forgotPasswordEmail"
                placeholder="Enter your email"
                value={forgotPasswordEmail}
                onChange={handleForgotPasswordChange}
                required
              />
              <button type="submit">Reset Password</button>
              <button type="button" onClick={() => setShowForgotPassword(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
