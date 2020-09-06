import React, { useState } from 'react';
function ConfirmRegistration(props) {
  const [confirmationCode, setConfirmationCode] = useState('');

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(event) => {
          event.preventDefault();
          props.confirmUser(confirmationCode);
        }}
      >
        <h1 className="font-sans text-3xl text-gray-800 text-left mb-4">
          Create an account
        </h1>

        <p className="font-sans text-gray-800 text-left mb-4">
          A verification code has been sent to your email address. <br />
          Enter the six digit code below.
        </p>

        <label className="input__label">Verification code:</label>
        <input
          className="text-field focus:outline-none focus:bg-white"
          value={confirmationCode}
          onChange={(event) => setConfirmationCode(event.target.value)}
        />

        <div className="flex justify-around mt-6">
          <button
            className="align-center shadow center bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={(event) => {
              props.back({ state: 'notRegistered' });
            }}
          >
            Back
          </button>

          <button
            className="align-center shadow center bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmRegistration;
