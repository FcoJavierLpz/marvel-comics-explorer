/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MARVEL_PUBLIC_KEY: string;
  readonly VITE_MARVEL_PRIVATE_KEY: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
