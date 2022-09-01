import { Cognito } from "@serverless-stack/resources";

new Cognito(stack, "Auth", {
    login: ["email"]
  });