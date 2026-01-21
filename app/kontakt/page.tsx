import { CONTACT_INFO } from "../../lib/data";

const STAFF = [
  {
    name: "Dr. Reimal",
    role: "Perearst",
    phone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
  },
  {
    name: "Mirjam Kulla",
    role: "Pereõde",
    phone: "+372 51112222",
    email: "mirjam.kulla@vosu.com",
  },
];

export default function Page() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-light tracking-wide">Kontakt</h1>
      </header>

      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
          Personal
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {STAFF.map((person) => (
            <div key={person.name} className="border-t border-slate-200 pt-4">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                {person.role}
              </div>
              <div className="mt-2 text-lg font-medium text-slate-900">
                {person.name}
              </div>
              <div className="mt-3 text-slate-700">Telefon: {person.phone}</div>
              <div className="text-slate-700">E-post: {person.email}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
          Valjaspool tööaega
        </h2>
        <div className="h-px w-16 bg-slate-200" />
        <div className="space-y-1 text-slate-700">
          <div>Perearsti nouandetelefon: 1220</div>
          <div>Hadaolukord: 112</div>
          <div>Murgistusteabe infotelefon: 16662</div>
        </div>
      </section>
    </div>
  );
}
