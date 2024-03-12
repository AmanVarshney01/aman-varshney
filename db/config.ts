import { NOW, column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Guestbook = defineTable({
  columns: {
    name: column.text(),
    message: column.text(),
    published: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { Guestbook },
});
