import { FlutedPattern } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./cocktails.css";

const COCKTAILS = [
  { name: "Gilded Hour", price: "21", note: "Rye, Cocchi, orange bitters, gold leaf." },
  { name: "Velvet Rope", price: "19", note: "Gin, violette, lemon, a cava float." },
  { name: "Midnight Matinee", price: "23", note: "Mezcal, black walnut, cold brew." },
  { name: "The Understudy", price: "18", note: "Bourbon, demerara, three dashes Peychaud's." },
  { name: "Ingénue", price: "20", note: "Vodka, elderflower, cucumber, brut." },
  { name: "Last Reel", price: "24", note: "Cognac, chartreuse, an absinthe rinse." },
];

export function Cocktails() {
  return (
    <section className="section cocktails" aria-labelledby="cocktails-title">
      <div className="shell cocktails__grid">
        <div className="cocktails__panel" {...reveal(0)}>
          <FlutedPattern className="cocktails__flutes" gap={16} />
          <span className="cocktails__panel-mark" aria-hidden="true">
            06
          </span>
        </div>

        <div className="cocktails__list-wrap">
          <p className="label" {...reveal(1)}>
            The Bar
          </p>
          <h2 className="section-title cocktails__title" id="cocktails-title" {...reveal(2)}>
            Six we make better than anyone.
          </h2>

          <ol className="cocktails__list">
            {COCKTAILS.map((drink, i) => (
              <li key={drink.name} className="cocktails__row" {...reveal(i)}>
                <span className="cocktails__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="cocktails__name">{drink.name}</span>
                <span className="cocktails__price">
                  <span className="u-visually-hidden">Price: </span>
                  <span aria-hidden="true">$</span>
                  {drink.price}
                </span>
                <span className="cocktails__note">{drink.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
