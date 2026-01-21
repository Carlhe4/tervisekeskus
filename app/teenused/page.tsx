const SERVICES = [
  { name: "Perearsti vastuvott", price: "45 EUR" },
  { name: "Õe vastuvott", price: "25 EUR" },
  { name: "Tervisetõend", price: "15 EUR" },
  { name: "Retsepti pikendamine", price: "10 EUR" },
  { name: "Vereproovi võtmine", price: "12 EUR" },
];

export default function TeenusedPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Hinnakiri
        </div>
        <h1 className="text-3xl font-semibold text-slate-900">Teenused</h1>
        <p className="max-w-2xl text-slate-600">
          Allolev hinnakiri on esialgne ning aitab patsientidel kiiresti
          orienteeruda.
        </p>
        <div className="h-px w-24 bg-slate-200" />
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Teenus ja hind
        </div>
        <div className="divide-y divide-slate-200">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between gap-6 px-6 py-4 text-slate-700"
            >
              <span className="text-sm font-medium text-slate-800">
                {service.name}
              </span>
              <span className="text-sm font-semibold text-slate-900">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
