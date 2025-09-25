export const prerender = false;

import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/email";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { name, email, subject, message } = data;

  // Validación básica
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({ success: false, error: "Campos requeridos faltantes." }),
      { status: 400 }
    );
  }

  // Sanitización básica
  const safeName = String(name).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeEmail = String(email).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeSubject = String(subject)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const safeMessage = String(message)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const html = `<p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Asunto:</strong> ${safeSubject}</p>
    <p><strong>Mensaje:</strong><br/>${safeMessage}</p>`;

  console.log("Enviando correo con los siguientes datos:", {
    name: safeName,
    email: safeEmail,
    subject: safeSubject,
    message: safeMessage,
  });

  const result = await sendEmail({
    to: "bs.alvarado21@gmail.com",
    subject: `Contacto: ${safeSubject}`,
    html,
  });

  if (result.success) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    let errorMsg = "Error al enviar el correo.";
    if (typeof result.error === "string") {
      errorMsg = result.error;
    } else if (
      result.error &&
      typeof result.error === "object" &&
      "message" in result.error
    ) {
      errorMsg = (result.error as any).message || errorMsg;
    }
    return new Response(JSON.stringify({ success: false, error: errorMsg }), {
      status: 500,
    });
  }
};
