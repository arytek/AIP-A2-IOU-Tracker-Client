/**
 * ErrorMessage utility module: A scalable client-side error handling utility.
 * Gets fed error codes, and outputs the text that is intended to be  displayed to the user.
 * Utilizes a hash table to sort through many potential error code cases.
 */

/**
 * TODO: Finish creating this module. Add more error code cases.
 * Refer to the following link for more information on how to implement the hash table intended to be used.
 * https://www.davidbcalhoun.com/2010/is-a-hash-faster-than-a-switch-in-javascript/
 *
 * Below are the APIs used in this application, and the error types that would be retured by their API.
 * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/CommonErrors.html
 * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
 * https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
 *
 */

const cases = {};

cases['ERRORCODEHERE'] = function () {};

function outputError(error) {
  let errorMessage;
  if (typeof cases[error] == 'function') {
    // only executes if we've defined it above
    errorMessage = cases[error]();
  } else {
    // default (the fallthrough)
  }

  return errorMessage;
}

export default outputError;
