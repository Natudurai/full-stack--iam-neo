
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    role: 'user',
  });
  const navigate = useNavigate();  

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);

   
    navigate('/');
  };

  return (
    <section className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={signUpData.fullName}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleSignUpChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={signUpData.phoneNumber}
          onChange={handleSignUpChange}
          required
        />
        <select name="role" value={signUpData.role} onChange={handleSignUpChange} required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
