export type Doctor = {
    id: string;
    name: string;
  };
  
  export type Slot = {
    id: string;
    doctorId: string;
    startTime: string; // ISO
    endTime: string;   // ISO
    status: "OPEN" | "BOOKED" | "BLOCKED";
  };
  
export type Appointment = {
  id: string;
  slotId: string;
  patientName: string;
  patientPhone?: string;
  patientEmail?: string;
  createdAt: string;
};
  
  function makeId(prefix: string) {
    return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
  }
  
  export const doctors: Doctor[] = [
    { id: "doc_a", name: "Dr. Reimal" },
    { id: "doc_b", name: "Õde Mirjam Kulla" },
  ];
  
  // Demo slotid: järgmised 7 päeva, 09:00–12:00 iga 30 min, mõlemale arstile
  export const slots: Slot[] = (() => {
    const out: Slot[] = [];
    const base = new Date();
  
    for (let day = 0; day < 7; day++) {
      const d = new Date(base);
      d.setDate(d.getDate() + day);
  
      for (const doc of doctors) {
        for (let hour = 9; hour < 17; hour++) {
          for (const minute of [0, 30]) {
            const start = new Date(d);
            start.setHours(hour, minute, 0, 0);
  
            const end = new Date(start);
            end.setMinutes(end.getMinutes() + 30);
  
            out.push({
              id: makeId("slot"),
              doctorId: doc.id,
              startTime: start.toISOString(),
              endTime: end.toISOString(),
              status: "OPEN",
            });
          }
        }
      }
    }
    return out;
  })();
  
  export const appointments: Appointment[] = [];
  
export function bookSlot(input: {
  slotId: string;
  patientName: string;
  patientPhone?: string;
  patientEmail?: string;
}) {
  const slot = slots.find((s) => s.id === input.slotId);
  if (!slot) return { ok: false as const, status: 404 as const, message: "Slot not found" };
  if (slot.status !== "OPEN") return { ok: false as const, status: 409 as const, message: "Slot not available" };
  if (new Date(slot.startTime).getTime() <= Date.now()) {
    return { ok: false as const, status: 400 as const, message: "Slot is in the past" };
  }
  
    slot.status = "BOOKED";
  
  const appt: Appointment = {
    id: makeId("appt"),
    slotId: slot.id,
    patientName: input.patientName.trim(),
    patientPhone: input.patientPhone?.trim() || undefined,
    patientEmail: input.patientEmail?.trim() || undefined,
    createdAt: new Date().toISOString(),
  };
  
    appointments.push(appt);
    return { ok: true as const, appointmentId: appt.id };
  }
  
