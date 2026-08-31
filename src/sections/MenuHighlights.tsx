import { CornerFlourish } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./menu-highlights.css";

const DISHES = [
  {
    name: "Oysters Rockefeller",
    price: "24",
    note: "Six on ice. Absinthe butter, a lace of breadcrumb.",
  },
  {
    name: "Dry-Aged Ribeye",
    price: "68",
    note: "Forty-two days on the bone. Bordelaise, bone marrow.",
  },
  {
    name: "Duck à l'Orange",
    price: "46",
    note: "Lacquered breast, burnt honey, bitter peel.",
  },
  {
    name: "Baked Alaska",
    price: "18",
    note: "Torched at the table. Meringue and Grand Marnier.",
  },
];

export function MenuHighlights() {
  return (
    <section className="section menu" id="menu" aria-labelledby="menu-title">
      <div className="shell">
        <div className="section-head">
          <p className="label" {...reveal(0)}>
            The Table
          </p>
          <h2 className="section-title" id="menu-title" {...reveal(1)}>
            Four things worth the trip.
          </h2>
          <hr className="rule rule--short" {...reveal(2)} />
        </div>

        <ul className="menu__grid">
          {DISHES.map((dish, i) => (
            <li key={dish.name} className="card stepped menu__card" {...reveal(i)}>
              <article className="card__body stepped menu__inner">
                <CornerFlourish className="menu__flourish" />
                <h3 className="menu__name">{dish.name}</h3>
                <p className="menu__price">
                  <span className="u-visually-hidden">Price: </span>
                  <span aria-hidden="true">$</span>
                  {dish.price}
                </p>
                <p className="menu__note">{dish.note}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
