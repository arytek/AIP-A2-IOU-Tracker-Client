import { AuthenticationDetails } from 'amazon-cognito-identity-js';

function authenticateUser(username, password, cognitoUser) {
  return new Promise(function (resolve, reject) {
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        resolve(data);
      },
      onFailure: (err) => {
        console.log('onFailure:', err);
        reject(err);
      },
      newPasswordRequired: (data) => {
        console.log('newPasswordRequired:', data);
        resolve(data);
      },
    });
  });
}
export default authenticateUser;
