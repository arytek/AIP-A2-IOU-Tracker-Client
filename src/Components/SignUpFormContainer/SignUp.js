import React, { useState } from 'react';

/**
 * Component for rendering the sign up form.
 * To be used with SignUpFormContainer.js.
 */
function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.signUpUser(name, email, password);
        }}
      >
        <h1 className="font-sans text-2xl text-left mb-4">Create an account</h1>

        <label className="form__label">Name</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label className="form__label">Email Address</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
