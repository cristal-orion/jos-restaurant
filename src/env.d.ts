/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** EmailJS — ID del servizio email (dashboard EmailJS → Email Services). */
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  /** EmailJS — ID del template per la richiesta evento (dashboard → Email Templates). */
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
  /** EmailJS — Public Key dell'account (dashboard → Account → General). */
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  /** Klaviyo — Company ID / Public API Key (usato dalle client subscriptions). */
  readonly PUBLIC_KLAVIYO_COMPANY_ID?: string;
  /** Klaviyo — ID della lista "eventi" a cui iscrivere i contatti del form. */
  readonly PUBLIC_KLAVIYO_EVENTI_LIST_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
