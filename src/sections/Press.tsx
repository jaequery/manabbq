import { DecoQuote } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./press.css";

const QUOTES = [
  {
    quote: "The last room in this city that still knows how to dim the lights.",
    name: "Nora Ellwood",
    source: "The Metropolitan Review",
  },
  {
    quote: "Dinner here is a performance with a curtain you never see rise.",
    name: "Desmond Rhee",
    source: "Nightfall Quarterly",
  },
  {
    quote: "Order the ribeye. Stay for the second act.",
    name: "Iris Calloway",
    source: "Table & Brass",
  },
];

export function Press() {
  return (
    <section className="section press" aria-labelledby="press-title">
      <div className="shell">
        <div className="section-head">
          <p className="label" {...reveal(0)}>
            Word of Mouth
          </p>
          <h2 className="section-title" id="press-title" {...reveal(1)}>
            What gets said afterwards.
          </h2>
          <hr className="rule rule--short" {...reveal(2)} />
        </div>

        <ul className="press__grid">
          {QUOTES.map((entry, i) => (
            <li key={entry.name} {...reveal(i)}>
              <figure className="press__figure">
                <DecoQuote className="press__mark" />
                <blockquote className="press__quote">
                  <p>{entry.quote}</p>
                </blockquote>
                <figcaption className="press__cite">
                  <span className="press__name">{entry.name}</span>
                  <span className="press__source">{entry.source}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
