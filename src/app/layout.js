import Nav from "./components/Nav";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Data Globe - Explore the world's wonders",
  description: "Explore the world's wonder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen py-8 px-20 md:px-56">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
