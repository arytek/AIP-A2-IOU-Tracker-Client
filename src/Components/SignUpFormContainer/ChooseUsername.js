import React, { useState } from 'react';

/**
 * Component for rendering the choose username form.
 * To be used with LoginFormContainer.js.
 */
function ChooseUsername(props) {
  const [username, setUsername] = useState('');

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (username) {
            props.setUsername(username);
          }
        }}
      >
        <h1 className="font-sans text-3xl text-gray-800 text-left mb-4">
          Choose your username
        </h1>

        <p className="font-sans text-gray-800 text-left mb-4">
          Your username is how other community members will see you.
        </p>

        <label className="form__label">Username</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
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

export default ChooseUsername;
