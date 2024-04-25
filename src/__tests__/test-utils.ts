import { promises as fs } from "fs";
import path from "path";

const getDbPath = (): string => {
  if (!process.env.DB_PATH) {
    throw new Error("Missing process.env.DB_PATH");
  }

  return process.env.DB_PATH;
};

const defaultDbPath = getDbPath();

export async function writeJSONToFile<T extends any>(filename: string, data: Array<T>, dbPath: string = defaultDbPath): Promise<void> {
  const filePath = path.join(dbPath, filename);
  const jsonData = JSON.stringify(data);
  await fs.writeFile(filePath, jsonData, { flag: "w" });
}
