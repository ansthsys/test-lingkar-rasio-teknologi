import "./bootstrap";
import "../css/app.css";
import "preline";
import "preline/preline";

import { createRoot } from "react-dom/client";
import { createInertiaApp, router } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { HSStaticMethods } from "preline";

HSStaticMethods.autoInit();

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        HSStaticMethods.autoInit();
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
});

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);

        router.on("navigate", (event) => {
            HSStaticMethods.autoInit();
        });

        delete el.dataset.page;
    },
    progress: {
        color: "#4B5563",
    },
});
