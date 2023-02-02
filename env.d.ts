/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  // APP Title
  readonly VITE_APP_TITLE: string;

  // API 前缀
  readonly VITE_BASE_API: string;

  // 是否检查用户权限
  readonly VITE_PERMISSION: string;
}
