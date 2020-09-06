import React, { useState } from 'react';
import SignUp from './SignUp';
import UserPool from '../../Utility/UserPool';
import ConfirmRegistration from './ConfirmRegistration';
import { Link } from 'react-router-dom';

function SignUpFormContainer() {
  // const [goBack, setGoBack] = useState(false);
  const [signUpStep, setSignUpStep] = useState({
    state: 'notRegistered',
    params: {},
  });

  let content = null;

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
        content = (
          <p>An error has occured. Please refresh or try again later.</p>
        );
      }
    });
  };

  const confirmUser = (confirmationCode) => {
    if (signUpStep.params.cognitoUser) {
      signUpStep.params.cognitoUser.confirmRegistration(
        confirmationCode,
        false,
        (err, data) => {
          if (data) {
            setSignUpStep({ state: 'confirmed' });
          } else if (err) {
            content = (
              <p>An error has occured. Please refresh or try again later.</p>
            );
          }
        }
      );
    } else {
      content = <p>An error has occured. Please refresh or try again later.</p>;
    }
  };

  switch (signUpStep.state) {
    case 'notRegistered':
      console.log('HERE!!');
      content = <SignUp signUpUser={signUpUser} />;
      break;

    case 'registered':
      content = (
        <ConfirmRegistration confirmUser={confirmUser} back={setSignUpStep} />
      );
      break;

    case 'confirmed':
      break;
    default:
  }

  return <div className="mx-auto w-full max-w-lg">{content}</div>;
}

export default SignUpFormContainer;
