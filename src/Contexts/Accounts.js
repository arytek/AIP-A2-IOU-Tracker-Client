import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../Utility/UserPool';

const AccountContext = createContext();

/**
 * Provides interaction with the AWS Cognito API and authentication functionality.
 * Provides AccountContext to the rest of the application.
 */
function Account(props) {
  /**
   * Uses the AWS Cognito CongnitoUser function of 'getSession' to  lookup
   * the local storage of the user's browser, and see whether they are currently
   * logged in to the application.
   * @returns {Promise<Object>}  Promise object containing the user's session and CognitoUser { session, user }.
   */
  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          err ? reject(err) : resolve({ session, user });
        });
      } else {
        console.warn('Warning: No user session found.');
        reject();
      }
    });

  /**
   * Returns an unauthenticated CognitoUser object.
   * @param {string} Username  The username of the user.
   * @returns {Promise<Object>}  Promise object containing an unauthenticated CognitoUser object.
   */
  const getCognitoUser = async (Username) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      if (user) {
        resolve(user);
      } else {
        console.warn('Warning: No user found in userPool.');
        reject();
      }
    });

  /**
   * Authenticates the user.
   * @param {string} Username  The username of the user.
   * @param {string} Password  The password of the user.
   */
  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess:', data);
          resolve(data);
        },

        onFailure: (err) => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: (data) => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        },
      });
    });

  /**
   * Logouts the user by calling CognitoUser API method of 'signOut()'.
   * the signOut method clears the all AWS Cognito local storage data stored in the user's browser.
   */
  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      window.location.href = '/';
    }
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        getCognitoUser,
        logout,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}

export { Account, AccountContext };
