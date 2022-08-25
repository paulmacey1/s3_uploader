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
        SVELTE_APP_API_URL: api.customDomainUrl || api.url,
        SVELTE_APP_REGION: app.region,
        SVELTE_APP_BUCKET: bucket.bucketName,
        SVELTE_APP_USER_POOL_ID: auth.userPoolId,
        SVELTE_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId,
        SVELTE_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
      },
    });
  
    // Show the url in the output
    stack.addOutputs({
      SiteUrl: site.url,
    });
  }