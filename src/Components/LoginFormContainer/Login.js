import React, { useState } from 'react';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.loginUser(username, password);
        }}
      >
        <h1 className="font-sans text-3xl text-gray-800 text-left mb-4">
          Login
        </h1>

        <label className="form__label">Username</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <label className="form__label">Password</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength="8"
          pattern="^(?=.*[a-z])(?=.*[0-9])\S{8,99}$"
          title="Password must contain letters, numbers and must be atleast 8 digits."
        />

        <div className="flex justify-center mt-6">
          <button className="form__button form__button--primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
