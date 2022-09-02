import { ViteStaticSite, use } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { StorageStack } from "./StorageStack";


export function FrontendStack({ stack, app }) {
    const { api } = use(ApiStack);
    const { auth } = use(AuthStack);
    const { bucket } = use(StorageStack);
  
    // Define our React app
    const site = new ViteStaticSite(stack, "SvelteSite", {
      path: "frontend",
      // Pass in our environment variables
      environment: {
        VITE_APP_API_URL: api.customDomainUrl || api.url,
        VITE_APP_REGION: app.region,
        VITE_APP_BUCKET: bucket.bucketName,
        VITE_APP_USER_POOL_ID: auth.userPoolId,
        VITE_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId,
        VITE_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
      },
    });
  
    // Show the url in the output
    stack.addOutputs({
      SiteUrl: site.url,
    });
  }