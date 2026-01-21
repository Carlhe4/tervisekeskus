import { bookSlot } from "../../../lib/store";

type Body = {
  slotId: string;
  patientName: string;
  patientPhone?: string;
  patientEmail?: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Body;

  if (!body.slotId || !body.patientName) {
    return new Response("Missing required fields", { status: 400 });
  }

  const res = bookSlot(body);

  if (!res.ok) return new Response(res.message, { status: res.status });
  return Response.json({ ok: true, appointmentId: res.appointmentId });
}
