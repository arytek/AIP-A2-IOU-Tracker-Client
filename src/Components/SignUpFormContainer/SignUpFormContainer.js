import React, { useState, useEffect } from 'react';
import UserPool from '../../Utility/UserPool';
import authenticateUser from '../../Utility/Authenticate';
import { v4 as uuidv4 } from 'uuid';

import SignUp from './SignUp';
import ConfirmRegistration from './ConfirmRegistration';
import ChooseUsername from './ChooseUsername';

import { useHistory } from 'react-router-dom';

function SignUpFormContainer() {
  const [signUpStep, setSignUpStep] = useState({
    state: 'notRegistered',
    params: { cognitoUser: null },
  });
  let [errorMessage, setErrorMessage] = useState('');

  let history = useHistory();
  let content = null;

  useEffect(() => {
    setErrorMessage('');
  }, [signUpStep]);

  const signUpUser = (name, email, password) => {
    const userAttributes = [
      {
        Name: 'name',
        Value: name,
      },
      {
        Name: 'email',
        Value: email,
      },
    ];
    const username = uuidv4();
    UserPool.signUp(username, password, userAttributes, null, (err, data) => {
      if (data) {
        setSignUpStep({
          state: 'registered',
          params: {
            cognitoUser: data.user,
            username: username,
            password: password,
          },
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
          authenticateUser(
            signUpStep.params.username,
            signUpStep.params.password,
            signUpStep.params.cognitoUser
          ).then((data) => {
            console.log(data);
          });
          setSignUpStep({
            ...signUpStep,
            state: 'confirmed',
            params: {
              cognitoUser: signUpStep.params.cognitoUser,
            },
          });
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

  const setUsername = (username) => {
    console.log('signUpStep:', signUpStep);
    let cognitoUser = signUpStep.params.cognitoUser;
    if (cognitoUser) {
      const userAttributes = [
        {
          Name: 'preferred_username',
          Value: username,
        },
      ];
      cognitoUser.updateAttributes(userAttributes, (err, data) => {
        console.log('confirmation: ', err, data);
        if (data) {
          setSignUpStep({ state: 'choseUsername' });
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
      content = <ChooseUsername setUsername={setUsername} />;
      break;

    case 'choseUsername':
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
