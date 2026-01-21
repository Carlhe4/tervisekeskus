import Link from "next/link";
import { ButtonLink } from "../components/ui/button";
import { InfoCard } from "../components/info-card";
import { CONTACT_INFO } from "../lib/data";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Ülaosa (ilma hero pildita) */}
      <section className="space-y-5">

        <p className="max-w-2xl text-slate-600">
          Arstiabi ja nõustamine. Vastuvõtt toimub eelregistreerimisega.
          Kiireim viis aja broneerimiseks on veebipõhine broneerimine.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <ButtonLink href="/broneeri" variant="primary">
            Broneeri aeg
          </ButtonLink>

          <ButtonLink href="/vastuvotuajad" variant="secondary">
            Vaata vastuvõtuaegu
          </ButtonLink>
        </div>
      </section>

      {/* INFORMATSIOON sektsioon */}
      <section className="space-y-8">
        <div className="text-center">
          <div className="text-4xl font-extralight tracking-[0.22em] text-slate-800">
            INFORMATSIOON
          </div>
          <div className="mx-auto mt-4 h-px w-56 bg-slate-200" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Asukoht">
            {CONTACT_INFO.address.city}, {CONTACT_INFO.address.county} <br />
            {CONTACT_INFO.address.street}, {CONTACT_INFO.address.zip}
          </InfoCard>

          <InfoCard title="Kontakt">
            Telefon: {CONTACT_INFO.phone} <br />
            E-post: {CONTACT_INFO.email}
          </InfoCard>

          <InfoCard title="Vastuvõtt">
            Eelregistreerimisega. <br />
            Broneeri aeg veebis või telefoni teel.
          </InfoCard>
        </div>
      </section>

      {/* Lisainfo / teated */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-medium text-slate-900">
            Patsiendi info
          </h2>
          <p className="mt-3 text-slate-600">
            Siia saad lisada lühidalt info korduvretseptide, töövõimetuslehtede,
            ja üldiste pöördumisjuhiste kohta.
          </p>
          <div className="mt-4">
            <Link className="text-sm font-medium text-slate-900 hover:underline" href="/uldinfo">
              Loe lähemalt →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-lg font-medium text-slate-900">
            Teated
          </h2>
          <p className="mt-3 text-slate-600">
            Kui soovid, saad siia hiljem lisada admin-vaate kaudu lühikesi teateid
            (nt puhkused, asendused, ajutised muudatused).
          </p>
          <div className="mt-4">
            <Link className="text-sm font-medium text-slate-900 hover:underline" href="/kontakt">
              Kontakt →
            </Link>
          </div>
        </div>
      </section>

      {/* Alumine CTA */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-medium text-slate-900">
              Soovid aega broneerida?
            </h2>
            <p className="mt-1 text-slate-600">
              Vali arst ja sobiv aeg – broneerimine võtab vähem kui minuti.
            </p>
          </div>

          <ButtonLink href="/broneeri" variant="primary" className="w-fit">
            Broneeri aeg
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
