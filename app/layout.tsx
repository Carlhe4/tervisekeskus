import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="et">
      <body className="min-h-screen bg-white text-slate-900 antialiased flex flex-col">
        <Header />
        <main className="container-page py-12 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
