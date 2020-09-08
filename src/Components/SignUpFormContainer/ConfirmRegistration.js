import React, { useState } from 'react';
function ConfirmRegistration(props) {
  const [confirmationCode, setConfirmationCode] = useState('');

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (confirmationCode) {
            props.confirmUser(confirmationCode);
          }
        }}
      >
        <h1 className="font-sans text-3xl text-gray-800 text-left mb-4">
          Create an account
        </h1>

        <p className="font-sans text-gray-800 text-left mb-4">
          A verification code has been sent to your email address. <br />
          Enter the six digit code below.
        </p>

        <label className="form__label">Verification code:</label>
        <input
          className="text-field"
          value={confirmationCode}
          onChange={(event) => setConfirmationCode(event.target.value)}
          required
        />

        <div className="flex justify-around mt-6">
          <button
            className="form__button form__button--secondary"
            type="button"
            onClick={(event) => {
              props.back({ state: 'notRegistered' });
            }}
          >
            Back
          </button>

          <button className="form__button form__button--primary" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmRegistration;
