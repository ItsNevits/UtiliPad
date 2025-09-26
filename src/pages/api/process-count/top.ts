export const prerender = false;

import type { APIRoute } from "astro";
import { db, desc, ProcessCounter } from "astro:db";

export const GET: APIRoute = async () => {
  // traer los top 5 procesos con mayor contador
  try {
    const topProcesses = await db
      .select()
      .from(ProcessCounter)
      .orderBy(desc(ProcessCounter.count))
      .limit(5)
      .all();
    return new Response(JSON.stringify({ success: true, topProcesses }), {
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
