import { useScrollReveal } from "./lib/useScrollReveal";
import { Atmosphere } from "./sections/Atmosphere";
import { Cocktails } from "./sections/Cocktails";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { HoursLocation } from "./sections/HoursLocation";
import { MenuHighlights } from "./sections/MenuHighlights";
import { NavBar } from "./sections/NavBar";
import { Origin } from "./sections/Origin";
import { Press } from "./sections/Press";
import { PrivateEvents } from "./sections/PrivateEvents";
import { ReserveCta } from "./sections/ReserveCta";

export function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* 1 */}
      <NavBar />

      <main className="page" id="main">
        {/* 2 */} <Hero />
        {/* 3 */} <Origin />
        {/* 4 */} <MenuHighlights />
        {/* 5 */} <Atmosphere />
        {/* 6 */} <Cocktails />
        {/* 7 */} <PrivateEvents />
        {/* 8 */} <Press />
        {/* 9 */} <HoursLocation />
        {/* 10 */} <ReserveCta />
      </main>

      {/* 11 */}
      <Footer />
    </>
  );
}
