import { render } from "hono/jsx/dom";
import { App } from "./app.tsx";
import "./index.css";

render(<App />, document.getElementById("app")!);
