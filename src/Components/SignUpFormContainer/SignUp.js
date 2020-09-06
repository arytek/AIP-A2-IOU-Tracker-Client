import React, { useState } from 'react';

function SignUp(props) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(event) => {
          event.preventDefault();
          props.signUpUser(name, username, email, password);
        }}
      >
        <h1 className="font-sans text-3xl text-gray-800 text-left mb-4">
          Create an account
        </h1>

        <label className="input__label">Name</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="input__label">Username</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label className="input__label">Email Address</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="input__label">Password</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="flex justify-center mt-6">
          <button
            className="align-center shadow center bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
