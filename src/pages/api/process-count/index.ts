export const prerender = false;

import type { APIRoute } from "astro";
import { db, eq, ProcessCounter } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { process_name } = data;

  // Validación básica
  if (!process_name) {
    return new Response(
      JSON.stringify({ success: false, error: "Campos requeridos faltantes." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
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

      return new Response(
        JSON.stringify({ success: true, count: existingProcess.count + 1 }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      // Si no existe, crear un nuevo registro con contador en 1
      const inserted = await db
        .insert(ProcessCounter)
        .values({ process_name, count: 1 })
        .returning()
        .get();

      return new Response(
        JSON.stringify({ success: true, count: inserted.count }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "Error del servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const GET: APIRoute = async () => {
  // traer todos los procesos y sus contadores
  try {
    const processes = await db.select().from(ProcessCounter).all();
    return new Response(JSON.stringify({ success: true, processes }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "Error del servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
