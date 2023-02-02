import type { UserConfig, ConfigEnv } from "vite";

import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createHtmlPlugin } from "vite-plugin-html";

// @ts-ignore
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const {
    VITE_PORT,
    VITE_INTERNAL_VERSION,
    VITE_APP_TITLE,
    VITE_PERMISSION,
    VITE_BASE_API,
    VITE_PROXY,
  } = env;
  const __APP_VERSION__ = [pkg.version, VITE_INTERNAL_VERSION].join(".");
  const __APP_BUILD_TIME__ = new Date().toISOString();
  const __APP_INFO__ = {
    dependencies: pkg.dependencies,
    devDependencies: pkg.devDependencies,
    name: pkg.name,
    version: pkg.version,
  };
  console.log("env:\n", env);

  return {
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        entry: "src/main.ts",
        minify: true,
        inject: {
          data: {
            title: VITE_APP_TITLE,
            version: __APP_VERSION__,
            time: __APP_BUILD_TIME__,
            mode,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: Number(VITE_PORT),
      proxy:
        VITE_PERMISSION && JSON.parse(VITE_PERMISSION)
          ? {
              [VITE_BASE_API]: {
                target: VITE_PROXY,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\//, "/api/v1/"),
              },
            }
          : undefined,
    },
    define: {
      __APP_VERSION__: JSON.stringify(__APP_VERSION__),
      __APP_BUILD_TIME__: JSON.stringify(__APP_BUILD_TIME__),
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
