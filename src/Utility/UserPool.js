import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-southeast-2_xvLxsFxJZ',
  ClientId: '4vgo3qmv7o0nri3fc8m27q5u2u',
};

export default new CognitoUserPool(poolData);
