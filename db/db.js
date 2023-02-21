import { resolve, dirname } from 'path';
import {fileURLToPath} from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dbFile = resolve(__dirname, 'data.json');

const adapter = new JSONFile(dbFile);

const db = new Low(adapter);

export default db;