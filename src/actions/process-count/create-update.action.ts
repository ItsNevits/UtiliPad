import { defineAction } from "astro:actions";
import { count, db, eq, ProcessCounter } from "astro:db";
import { z } from "astro:schema";

export const createUpdateProcessCount = defineAction({
  accept: "json",
  input: z.object({
    process_name: z.string().min(1, "El nombre del proceso es requerido."),
  }),
  handler: async ({ process_name }) => {
    if (!process_name) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El nombre del proceso es requerido.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Buscar el proceso en la base de datos
    const existingProcess = await db
      .select()
      .from(ProcessCounter)
      .where(eq(ProcessCounter.process_name, process_name))
      .get();

    if (existingProcess) {
      // Si existe, incrementar el contador
      const updated = await db
        .update(ProcessCounter)
        .set({ count: existingProcess.count + 1 })
        .where(eq(ProcessCounter.process_name, process_name))
        .run();

      return { success: true, count: existingProcess.count + 1 };
    } else {
      // Si no existe, crear un nuevo registro con contador en 1
      const inserted = await db
        .insert(ProcessCounter)
        .values({ process_name, count: 1 })
        .returning()
        .get();

      return { success: true, count: inserted.count };
    }
  },
});
