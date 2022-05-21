import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_BEppNRRrB",
    ClientId: "6rpdoe3aosu84nf4b6qeacgntv"
}

export default new CognitoUserPool(poolData);