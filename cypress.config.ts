import { defineConfig } from "cypress";
import { resetDB } from "./cypress/mockData/reset-db";
import { addOrder } from "./cypress/mockData/test-utils";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        "db:reset": () => resetDB().then(() => null),
        addOrder: () => addOrder({ id: "12345", title: "delectus aut autem" }).then(() => null),
      });
    },
    baseUrl: "http://localhost:3000",
  },
  env: {
    DB_PATH: "./src/__tests__/db",
    CYPRESS_USER_NAME: "ali@hamdan.com",
    CYPRESS_PASSWORD: "123",
  },
});
