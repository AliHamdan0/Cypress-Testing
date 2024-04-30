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

export async function getJSONfromFile(filename: string, dbPath: string = defaultDbPath): Promise<any[]> {
  const filePath = path.join(dbPath, filename);
  const data = await fs.readFile(filePath);
  return JSON.parse(data.toString());
}

export async function writeOrder(newOrderArray: any[]): Promise<void> {
  await writeJSONToFile("../db/orders.json", newOrderArray);
}

export async function getOrder(): Promise<any[]> {
  return getJSONfromFile("../db/orders.json");
}

export async function addOrder(newOrder: any): Promise<any> {
  const orders = await getOrder();
  orders.push(newOrder);
  await writeOrder(orders);
  return newOrder;
}
