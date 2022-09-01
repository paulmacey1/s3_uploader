import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";
import { Auth } from "@serverless-stack/resources";



export function ApiStack({ stack, app }) {

  
  const { table } = use(StorageStack);

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
        
      },
    },
    routes: {
      "POST /notes": "functions/create.main",
      "GET /notes/{id}": "functions/get.main",
    //   "GET /notes": "functions/list.main",
      "PUT /notes/{id}": "functions/update.main",
    },
  });


  const auth = new Auth(stack, "auth", {
    authenticator: "functions/auth.handler",
  });
  
  auth.attach(stack, {
    api: api,
    prefix: "/auth", // optional
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}