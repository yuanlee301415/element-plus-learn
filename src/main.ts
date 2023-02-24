import { createApp } from "vue";
import "virtual:svg-icons-register";

import App from "@/App.vue";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";
import Icon from "@/components/Icon";
import "@/assets/main.css";

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);
  app.component("Icon", Icon);
  app.mount("#app");
}

bootstrap();
