/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_KLAVIYO_COMPANY_ID?: string;
  readonly PUBLIC_KLAVIYO_EVENTI_LIST_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}