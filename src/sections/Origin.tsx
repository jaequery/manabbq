import { SteppedArch } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./origin.css";

export function Origin() {
  return (
    <section className="section origin" aria-labelledby="origin-title">
      <div className="shell origin__grid">
        <div className="origin__mark" {...reveal(0)}>
          <span className="origin__numeral" aria-hidden="true">
            01
          </span>
          <SteppedArch className="origin__arch" />
        </div>

        <div className="origin__body">
          <p className="label origin__label" {...reveal(1)}>
            The Room
          </p>
          <h2 className="section-title" id="origin-title" {...reveal(2)}>
            A picture palace that never quite went dark.
          </h2>
          <p className="origin__copy" {...reveal(3)}>
            The Orpheum opened in 1927 and ran film until 1961. When the projectors were carted out,
            the lobby kept its ceiling — thirty feet of hammered brass with a sunburst at the centre
            — and somebody had the good sense to put a bar underneath it.
          </p>
          <p className="origin__copy" {...reveal(4)}>
            We serve supper there now. Low light, long banquettes, a piano that starts at nine and
            stops when it likes. Nothing in this room is in a hurry. Neither are you.
          </p>
        </div>
      </div>
    </section>
  );
}
