"use client";

import { useEffect, useState } from "react";

type Doctor = {
  id: string;
  name: string;
};

type Slot = {
  id: string;
  startTime: string;
};

export default function Page() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotId, setSlotId] = useState("");

  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [message, setMessage] = useState("");

  async function loadSlots(doctorIdValue: string, dateValue: string) {
    const from = new Date(dateValue + "T00:00:00").toISOString();
    const to = new Date(dateValue + "T23:59:59").toISOString();

    const res = await fetch(
      `/api/slots?doctorId=${doctorIdValue}&from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(to)}`
    );

    if (!res.ok) {
      setSlots([]);
      return;
    }

    const data = (await res.json()) as Slot[];
    setSlots(data);
  }

  // Lae arstid
  useEffect(() => {
    fetch("/api/doctors")
      .then((r) => r.json())
      .then((data) => {
        setDoctors(data);
        if (data.length > 0) setDoctorId(data[0].id);
      });
  }, []);

  // Lae ajad
  useEffect(() => {
    if (!doctorId) return;

    loadSlots(doctorId, date);
  }, [doctorId, date]);

  useEffect(() => {
    if (!slotId) return;
    const isStillAvailable = slots.some(
      (s) => s.id === slotId && new Date(s.startTime).getTime() > Date.now()
    );
    if (!isStillAvailable) setSlotId("");
  }, [slots, slotId]);

  async function submit() {
    if (!slotId || !patientName) {
      setMessage("Palun täida kõik vajalikud väljad.");
      return;
    }

    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slotId,
        patientName,
        patientPhone,
      }),
    });

    if (res.ok) {
      setMessage("Broneering tehtud.");
      setSlotId("");
      setPatientName("");
      setPatientPhone("");
      await loadSlots(doctorId, date);
    } else {
      setMessage("Tekkis viga. Proovi uuesti.");
    }
  }

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-extralight tracking-wide">Broneeri vastuvõtuaeg</h1>
        <p className="max-w-2xl text-slate-600">
          Palun vali arst, kuupäev ja sobiv vastuvõtuaeg. Vastuvõtt toimub eelregistreerimisega.
        </p>
      </header>
  
      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-5">
          {/* Arst */}
          <div>
            <label className="block text-sm text-slate-600">Arst</label>
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
            >
              {doctors.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
  
          {/* Kuupäev */}
          <div>
            <label className="block text-sm text-slate-600">Kuupäev</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
            />
          </div>
  
          {/* Kellaaeg */}
          <div>
            <label className="block text-sm text-slate-600">Kellaaeg</label>
            <select
              value={slotId}
              onChange={(e) => setSlotId(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
            >
              <option value="">Vali aeg</option>
              {slots
                .filter((s) => new Date(s.startTime).getTime() > Date.now())
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {new Date(s.startTime).toLocaleTimeString("et-EE", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </option>
                ))}
            </select>
          </div>
  
          {/* Nimi + Telefon (2 veergu desktopis) */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-600">Nimi</label>
              <input
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
              />
            </div>
  
            <div>
              <label className="block text-sm text-slate-600">Telefon (valikuline)</label>
              <input
                value={patientPhone}
                onChange={(e) => {
                  const raw = e.target.value;
                  const hasPlus = raw.trim().startsWith("+");
                  const digits = raw.replace(/\D/g, "").slice(0, 12);
                  setPatientPhone(hasPlus ? `+${digits}` : digits);
                }}
                inputMode="tel"
                pattern="\\+?[0-9]*"
                maxLength={13}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
              />
            </div>
          </div>
  
          <button
            onClick={submit}
            className="mt-2 inline-flex w-fit rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Kinnita broneering
          </button>
  
          {message && <p className="text-sm text-slate-700">{message}</p>}
        </div>
      </section>
    </div>
  );
  
}
