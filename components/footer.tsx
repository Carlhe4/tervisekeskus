export function Footer() {
    return (
        <footer className="border-t border-slate-200">
            <div className="container-page py-8 text-sm text-slate-500">
                © {new Date().getFullYear()} Võsu Tervisekeskus
            </div>
        </footer>
    );
}
