import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_fBK9Ts1mh",
  ClientId: "7r5v8hjqh68ldg1g1sd2e4240r",
};

export default new CognitoUserPool(poolData);
