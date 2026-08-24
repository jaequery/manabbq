/* The four global sheets are imported before <App> so that the per-section
   stylesheets pulled in by the components land *after* the foundation and can
   override it. Import order here is the cascade order in the built bundle. */
import "./styles/fonts.css";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/components.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root is missing from index.html");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
