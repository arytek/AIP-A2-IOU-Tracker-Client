import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: 'us-east-2_7jQgRzLnC',
  ClientId: '23iev2bmn7d5gf88au24fh81jj',
};

export default new CognitoUserPool(poolData);
