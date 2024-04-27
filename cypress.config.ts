import { defineConfig } from "cypress";
import { resetDB } from "./cypress/mockData/reset-db";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        "db:reset": () => resetDB().then(() => null),
      });
    },
    baseUrl: "http://localhost:3000",
  },
  env: {
    DB_PATH: "./src/__tests__/db",
  },
});
