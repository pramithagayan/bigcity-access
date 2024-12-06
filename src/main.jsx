import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you're using `react-dom/client`
import Widget from "./components/Widget";

// Expose a global `BigcityWidget` object
window.BigcityWidget = {
  init: (config) => {
    const containerId = config?.containerId || "bigcity-widget";
    let container = document.getElementById(containerId);

    // If container doesn't exist, create one
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }

    // Create and render the root
    const root = ReactDOM.createRoot(container); // Use ReactDOM.createRoot
    root.render(<Widget {...config} />);
  },
};