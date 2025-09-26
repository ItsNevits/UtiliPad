import { column, defineDb, defineTable } from "astro:db";

const ProcessCounter = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    process_name: column.text(),
    count: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    ProcessCounter,
  },
});
