import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolDate = {
  UserPoolId: "us-east-1_b26ymHAWE",
  ClientId: "1qkv846kpr9ob2r09kg3p0fvkq",
};

export default new CognitoUserPool(poolDate);