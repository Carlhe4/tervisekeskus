import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="container-page flex items-center justify-between py-5">
                <Link href="/" className="text-sm font-semibold tracking-[0.18em]">
                    VÕSU TERVISEKESKUS
                </Link>
                <nav className="flex items-center gap-6 text-sm text-slate-600">
                    <Link className="hover:text-slate-900" href="/uldinfo">
                        Üldinfo
                    </Link>
                    <Link className="hover:text-slate-900" href="/kontakt">
                        Kontakt
                    </Link>
                    <Link className="hover:text-slate-900" href="/vastuvotuajad">
                        Vastuvõtuajad
                    </Link>
                    <Link className="hover:text-slate-900" href="/broneeri">
                        Broneeri
                    </Link>
                </nav>
            </div>
        </header>
    );
}
