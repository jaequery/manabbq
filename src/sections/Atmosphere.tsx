import type { ReactNode } from "react";
import { ChevronPattern, FlutedArch, Sunburst } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./atmosphere.css";

const PANELS: { caption: string; note: string; art: ReactNode }[] = [
  {
    caption: "Bar",
    note: "Twelve stools, brass rail, no clock.",
    art: <ChevronPattern className="atmos__fill" />,
  },
  {
    caption: "Dining Room",
    note: "Forty covers beneath the sunburst.",
    art: <Sunburst className="atmos__burst spin" rays={30} duty={0.4} rInner={16} />,
  },
  {
    caption: "Terrace",
    note: "Six tables. Open when the night is kind.",
    art: <FlutedArch className="atmos__arch" />,
  },
];

export function Atmosphere() {
  return (
    <section className="section lounge" id="lounge" aria-labelledby="lounge-title">
      <div className="shell">
        <div className="section-head">
          <p className="label" {...reveal(0)}>
            The Lounge
          </p>
          <h2 className="section-title" id="lounge-title" {...reveal(1)}>
            Three rooms, one long evening.
          </h2>
          <hr className="rule rule--short" {...reveal(2)} />
        </div>

        <ul className="atmos__grid">
          {PANELS.map((panel, i) => (
            <li key={panel.caption} className="atmos__item" {...reveal(i)}>
              <div className="atmos__tile">
                <div className="atmos__art" aria-hidden="true">
                  {panel.art}
                </div>
              </div>
              <p className="label atmos__caption">{panel.caption}</p>
              <p className="atmos__note">{panel.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
