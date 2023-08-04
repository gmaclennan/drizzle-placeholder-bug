import { integer, sqliteTable, customType } from 'drizzle-orm/sqlite-core'

const textArray =
  /** @type {ReturnType<typeof customType<{ data: string[], driverData: string }>>} */ (
    customType({
      dataType() {
        return 'text'
      },
      fromDriver(value) {
        return JSON.parse(value)
      },
      toDriver(value) {
        return JSON.stringify(value)
      },
    })
  )

export const table = sqliteTable('table', {
  bool: integer('bool', { mode: 'boolean' }),
  list: textArray('list')
})
