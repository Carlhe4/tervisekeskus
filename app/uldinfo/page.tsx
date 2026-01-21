export default function Page() {
  return (
    <div className="space-y-16">
      <header className="space-y-4 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-slate-500">
          Informatsioon
        </div>
        <h1 className="text-3xl font-light tracking-[0.18em] text-slate-900">
          Üldine kodukord
        </h1>
        <div className="mx-auto h-px w-28 bg-slate-200 relative">
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-500" />
        </div>
        <p className="mx-auto max-w-2xl text-slate-700">
          Siit leiad põhilised reeglid ja protseduurid: haigestumine,
          töövõimetuslehed, saatekirjad, retseptid ja muu oluline info.
        </p>
      </header>

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Haigestumine
          </h2>
          <div className="h-px w-16 bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              Palume perearstiga kontakteerumisel varuda kannatlikkust. Kui ei ole
              tegemist kiireloomulise tervisehädaga, kasuta kontakteerumiseks
              pealelõunast aega või e-kanaleid.
            </li>
            <li>
              Ägeda haigestumise puhul võib pöörduda otse pereõe vastuvõtule,
              vajalik ette registreerimine telefoni teel.
            </li>
            <li>
              Perearsti vastuvõtule tuleb alati ette registreeruda telefoni teel,
              vajalik on teatada pöördumise põhjus.
            </li>
            <li>
              Kui oled kõneootejärjekorras, varu kannatust. Kõnele vastatakse
              esimesel võimalusel.
            </li>
            <li>
              Pereõde teostab ägeda haige esmast vastuvõttu, teeb protseduure,
              vaktsineerimisi, jälgib imikute arengut ja nõustab emasid.
            </li>
            <li>
              Koduvisiite üldjuhul ei tehta. Põhjendatud vajadusel teeb koduvisiite
              perearst või pereõde arsti otsusel. Koduvisiit on tasuline.
            </li>
            <li>
              Kui mõjuval põhjusel ei saa tulla registreeritud ajal vastuvõtule,
              palume vastuvõtu aeg tühistada.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Töövõimetuslehed / hoolduslehed
          </h2>
          <div className="h-px w-16 bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              Töövõimetuslehti väljastame alates pöördumise päevast; tagantjärele
              töövõimetuslehti ei väljastata.
            </li>
            <li>
              Kui kindlustatud isik ei ilmu kokku lepitud ajal vastuvõtule või ei
              kontakteeru kokkulepitud ajal ilma mõjuva põhjuseta, lõpetab
              tervishoiutöötaja töövõimetuslehe kolme tööpäeva jooksul.
            </li>
            <li>
              Haige lapsega käib vastuvõtul hoolduslehel olev lapsevanem.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Saatekirjad ja operatsioonide eelsed uuringud
          </h2>
          <div className="h-px w-16 bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              Saatekiri on perearsti ja eriarsti vaheline konsultatsioon, mille
              perearst vormistab pärast patsiendi läbivaatust.
            </li>
            <li>Saatekiri väljastatakse ainult meditsiinilisel näidustusel.</li>
            <li>
              Saatekirjal peab olema selgelt esitatud meditsiiniline küsimus või
              hüpotees, mis põhjendab suunamise vajalikkust.
            </li>
            <li>
              Operatsioonieelseks ettevalmistuseks vajalikud uuringud teeb
              eriarstiabi osutaja või haigla enne operatsiooni.
            </li>
            <li>
              Tagasikutse korral vormistab saatekirja eriarst.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Konsultatsioonid, analüüside vastused, retseptid
          </h2>
          <div className="h-px w-16 bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              Tervisemurede edastamiseks palume kasutada e-perearstikeskust või
              perearst24.
            </li>
            <li>Telefonikonsultatsioon õega on võimalik tööpäeva jooksul.</li>
            <li>Analüüside vastuseid edastame tööpäeviti alates kella 13.00.</li>
            <li>
              Retseptid pikendame esimesel võimalusel, kuid hiljemalt järgmise
              tööpäeva lõpuks.
            </li>
            <li>
              Perearstil ja pereõdedel on õigus oma nimistu patsiendi
              terviseinfot vaadata digiloost.
            </li>
            <li>Tervisekeskuses on lõunapaus 12.00–12.30.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Tõendid
          </h2>
          <div className="h-px w-16 bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              Tervisetõendi taotlemisel autojuhilubade saamiseks tuleb täita
              tervisedeklaratsioon ja see allkirjastada.
            </li>
            <li>Tervisetõendid on tasulised.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-semibold tracking-[0.2em] text-slate-900 uppercase">
            Füsioteraapia kabineti kodukord
          </h2>
          <div className="h-px w-16 bg-slate-200" />
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              Füsioteraapia aega saab tühistada hiljemalt 1 tööpäev (24h) enne
              kokkulepitud aega helistades E–R 8.00–16.00 telefonil 53603733 või
              otse füsioterapeudile kodulehel märgitud telefonidel.
            </li>
            <li>
              Oma tulematajätmisest palume teavitada ka siis, kui protseduurini on
              jäänud vähem kui 24h.
            </li>
            <li>
              Kui füsioteraapia protseduurile ei ilmuta ja meid sellest ei teavita,
              on meil õigus tühistada järgmised protseduurid.
            </li>
            <li>
              Kui jätad protseduurile tulemata ja meid sellest ei teavita, võib
              perearst teenuse maksumuse välja nõuda vastavalt hinnakirjale.
            </li>
            <li>Füsioteraapia protseduurile tulles palume kanda sokke.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
  
