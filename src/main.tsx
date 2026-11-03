import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./dist";

createRoot(document.getElementById("/*")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
