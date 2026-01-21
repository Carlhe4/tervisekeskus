import { CONTACT_INFO } from "../../lib/data";

export default function Page() {
    return (
      <div className="space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-light tracking-wide">
            Vastuvõtuajad
          </h1>
          <p className="max-w-2xl text-slate-600">
            Broneerimiseks helista {CONTACT_INFO.phone} või kirjuta
            {` ${CONTACT_INFO.email}`}.
          </p>
        </header>
  
        <section className="grid gap-8 md:grid-cols-2">
          {/* Arst A */}
          <div className="rounded border border-slate-200 p-6">
            <h2 className="text-lg font-medium text-slate-900">
              Dr. Reimal
            </h2>
  
            <div className="mt-4 space-y-1 text-slate-700">
              <div>E–R: 09:00–17:00</div>
              <div className="text-sm text-slate-500">
                (vastuvõtt eelregistreerimisega)
              </div>
            </div>
          </div>
  
          {/* Arst B */}
          <div className="rounded border border-slate-200 p-6">
            <h2 className="text-lg font-medium text-slate-900">
              Õde Mirjam Kulla
            </h2>
  
            <div className="mt-4 space-y-1 text-slate-700">
              <div>E–R: 09:00–17:00</div>
              <div className="text-sm text-slate-500">
                (vastuvõtt eelregistreerimisega)
              </div>
            </div>
          </div>
        </section>
  
        <section className="max-w-2xl rounded border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-sm font-medium uppercase tracking-wide text-slate-600">
            Täiendav info
          </h3>
          <p className="mt-3 text-slate-700">
            Palume vastuvõtule tulla täpselt kokkulepitud ajal. Vastuvõtuaegade
            muutumisest teavitatakse patsiente esimesel võimalusel.
          </p>
        </section>
      </div>
    );
  }
  
