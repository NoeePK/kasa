import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./App";

// Style applicable à TOUTE l'application
import "./styles/compiled/index.css";
import "./styles/compiled/small.css";
import "./styles/compiled/xsmall.css";

const root_container = document.getElementById("root");
const root = createRoot(root_container);

root.render(
<Router>
    <App />
</Router>
);
