import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import UserPool from '../../Utility/UserPool';
import ConfirmRegistration from './ConfirmRegistration';
import { useHistory } from 'react-router-dom';

function SignUpFormContainer() {
  const [signUpStep, setSignUpStep] = useState({
    state: 'notRegistered',
    params: {},
  });
  let [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();
  let content = null;

  useEffect(() => {
    setErrorMessage('');
  }, [signUpStep]);

  const signUpUser = (name, username, email, password) => {
    const userAttributes = [
      {
        Name: 'name',
        Value: name,
      },
      {
        Name: 'preferred_username',
        Value: username,
      },
    ];

    UserPool.signUp(email, password, userAttributes, null, (err, data) => {
      if (data) {
        setSignUpStep({
          state: 'registered',
          params: { cognitoUser: data.user },
        });
      } else if (err) {
        setErrorMessage(
          'An error has occured. Please refresh or try again later.'
        );
      }
    });
  };

  const confirmUser = (confirmationCode) => {
    let cognitoUser = signUpStep.params.cognitoUser;
    if (cognitoUser) {
      cognitoUser.confirmRegistration(confirmationCode, false, (err, data) => {
        if (data) {
          setSignUpStep({ state: 'confirmed' });
        } else if (err) {
          setErrorMessage(
            'An error has occured. Please refresh or try again later.'
          );
        }
      });
    } else {
      setErrorMessage(
        'An error has occured. Please refresh or try again later.'
      );
    }
  };

  switch (signUpStep.state) {
    case 'notRegistered':
      content = <SignUp signUpUser={signUpUser} />;
      break;

    case 'registered':
      content = (
        <ConfirmRegistration confirmUser={confirmUser} back={setSignUpStep} />
      );
      break;

    case 'confirmed':
      history.push('/');
      break;
    default:
  }

  return (
    <div className="mx-auto w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {content}
      <p className="text-center mt-4">{errorMessage}</p>
    </div>
  );
}

export default SignUpFormContainer;
