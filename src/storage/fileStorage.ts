import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { Db } from "../types";

const DB_PATH = join(process.cwd(), "data", "db.json");

export const readDb =  () => {
    const raw = readFileSync(DB_PATH, "utf8");
    return JSON.parse(raw);
}

export const writeDb = (db: Db) => {
    writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

