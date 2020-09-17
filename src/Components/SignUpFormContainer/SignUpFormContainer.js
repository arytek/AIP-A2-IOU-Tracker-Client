import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserPool from '../../Utility/UserPool';
import { AccountContext } from '../../Contexts/Accounts';

import SignUp from './SignUp';
import ConfirmRegistration from './ConfirmRegistration';
import ChooseUsername from './ChooseUsername';

/**
 * Component for rendering the sign up form. Handles sign up UI flow.
 *
 * First signs up the user, then saves the user's username and password
 * in memory temporarily to enable automatic login after user chooses
 * their username. After confirming user's email address, authenticates
 * user using saved username and password attributes in signUpStep state.
 * Finally allows user to choose a username.
 */
function SignUpFormContainer() {
  const [signUpStep, setSignUpStep] = useState({
    state: 'notRegistered',
    params: { username: null, password: null },
  });
  let [errorMessage, setErrorMessage] = useState('');

  const { authenticate, getCognitoUser, getSession } = useContext(
    AccountContext
  );

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

  const confirmUser = async (confirmationCode) => {
    const cognitoUser = await getCognitoUser(signUpStep.params.username);
    if (cognitoUser) {
      cognitoUser.confirmRegistration(confirmationCode, false, (err, data) => {
        if (data) {
          authenticate(signUpStep.params.username, signUpStep.params.password)
            .then((data) => {
              console.log('Logged in!', data);
            })
            .catch((err) => {
              console.error('Failed to login!', err);
            });
          setSignUpStep({
            ...signUpStep,
            state: 'confirmed',
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
    getSession()
      .then(({ user }) => {
        const userAttributes = [
          {
            Name: 'preferred_username',
            Value: username,
          },
        ];
        user.updateAttributes(userAttributes, (err, data) => {
          console.log('confirmation: ', err, data);
          if (data) {
            setSignUpStep({ state: 'choseUsername' });
          } else if (err) {
            setErrorMessage(
              'An error has occured. Please refresh or try again later.'
            );
          }
        });
        setErrorMessage(
          'An error has occured. Please refresh or try again later.'
        );
      })
      .catch((err) => {
        console.error(err);
      });
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
      window.location.href = '/';
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
