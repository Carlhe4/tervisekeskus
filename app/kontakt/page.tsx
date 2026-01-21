import { CONTACT_INFO } from "../../lib/data";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-light tracking-wide">Kontakt</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded border border-slate-200 p-5">
          <div className="text-sm uppercase tracking-wide text-slate-500">Telefon</div>
          <div className="mt-2 text-slate-800">{CONTACT_INFO.phone}</div>
        </div>
        <div className="rounded border border-slate-200 p-5">
          <div className="text-sm uppercase tracking-wide text-slate-500">E-post</div>
          <div className="mt-2 text-slate-800">{CONTACT_INFO.email}</div>
        </div>
        <div className="rounded border border-slate-200 p-5">
          <div className="text-sm uppercase tracking-wide text-slate-500">Aadress</div>
          <div className="mt-2 text-slate-800">
            {CONTACT_INFO.address.city}, {CONTACT_INFO.address.county}<br />
            {CONTACT_INFO.address.street}, {CONTACT_INFO.address.zip}
          </div>
        </div>
      </div>
    </div>
  );
}