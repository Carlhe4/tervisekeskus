import { slots } from "../../../lib/store";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const doctorId = url.searchParams.get("doctorId");
  const from = url.searchParams.get("from");
  const to = url.searchParams.get("to");

  if (!doctorId || !from || !to) {
    return new Response("Missing doctorId/from/to", { status: 400 });
  }

  const fromDate = new Date(from);
  const toDate = new Date(to);

  const result = slots
    .filter((s) => s.doctorId === doctorId)
    .filter((s) => s.status === "OPEN")
    .filter((s) => {
      const t = new Date(s.startTime).getTime();
      return t >= fromDate.getTime() && t < toDate.getTime();
    })
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

  return Response.json(result);
}
