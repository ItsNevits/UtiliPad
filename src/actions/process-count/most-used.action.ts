import { defineAction } from "astro:actions";
import { db, desc, ProcessCounter } from "astro:db";
import { z } from "astro:schema";

export const mostUsedTool = defineAction({
  accept: "json",
  input: z.object({}),
  handler: async () => {
    const topProcesses = await db
      .select()
      .from(ProcessCounter)
      .orderBy(desc(ProcessCounter.count))
      .limit(5)
      .all();

    return {
      success: true,
      topProcesses,
    };
  },
});
