import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolDate = {
  UserPoolId: "us-east-2_G7GMKYwql",
  ClientId: "507ir7u5rb1q9tntl0t8lto8e",
};

export default new CognitoUserPool(poolDate);