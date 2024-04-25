import users from "./users.json";
import orders from "./orders.json";
import { writeJSONToFile } from "../test-utils";

export const resetDB = async () => {
  // failsafe against resetting production db!
  const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING: database reset unavailable outside test environment!");
    return;
  }

  // overwrite data in files
  await Promise.all([writeJSONToFile("users.json", []), writeJSONToFile("orders.json", [])]);
};
