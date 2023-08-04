import { table } from './schema.js'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { eq, placeholder } from 'drizzle-orm'
import Database from 'better-sqlite3'

const sqlite = new Database('sqlite.db')
const db = drizzle(sqlite)

const stmt = db
  .insert(table)
  .values({ bool: placeholder('bool'), list: placeholder('list') })
  .prepare()

stmt.run({ bool: true, list: [] })

console.log(db.select().from(table).get())
// { bool: true, list: { name: 'list' } }
