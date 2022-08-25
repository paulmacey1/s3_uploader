/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SVELTE_APP_API_URL: string
  readonly SVELTE_APP_REGION: string
  readonly SVELTE_APP_BUCKET: string
  readonly SVELTE_APP_USER_POOL_ID: string
  readonly SVELTE_APP_IDENTITY_POOL_ID: string
  readonly SVELTE_APP_USER_POOL_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}