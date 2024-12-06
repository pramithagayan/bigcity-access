import React, { useState } from "react";
import "./ContentAdjustments.css";

const ContentAdjustments = () => {
  const [fontSize, setFontSize] = useState(16); // Default font size in px
  const [lineHeight, setLineHeight] = useState(1.5); // Default line height
  const [letterSpacing, setLetterSpacing] = useState(0); // Default letter spacing
  const [highlightTitles, setHighlightTitles] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [textAlign, setTextAlign] = useState("left"); // Default alignment
  const [zoomLevel, setZoomLevel] = useState(1); // Default zoom level (100%)

  // Adjust font size
  const adjustFontSize = (change) => {
    setFontSize((prev) => Math.max(10, prev + change)); // Minimum font size: 10px
    document.body.style.fontSize = `${Math.max(10, fontSize + change)}px`;
  };

  const adjustZoom = (change) => {
    const newZoom = Math.max(0.5, zoomLevel + change); // Minimum zoom: 50%
    setZoomLevel(newZoom);

    // Apply zoom to the body element excluding specific classes
    const body = document.querySelector("body");
    body.style.zoom = newZoom; // Apply zoom
  };

  // Adjust line height
  const adjustLineHeight = (change) => {
    setLineHeight((prev) => Math.max(1, prev + change)); // Minimum line height: 1
    document.body.style.lineHeight = `${Math.max(1, lineHeight + change)}`;
  };

  // Adjust letter spacing
  const adjustLetterSpacing = (change) => {
    setLetterSpacing((prev) => prev + change);
    document.body.style.letterSpacing = `${letterSpacing + change}px`;
  };

  // Toggle highlight for titles
  const toggleHighlightTitles = () => {
    setHighlightTitles((prev) => !prev);
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    titles.forEach((title) => {
      title.style.backgroundColor = highlightTitles ? "transparent" : "#ffff99"; // Yellow highlight
    });
  };

  // Toggle highlight for links
  const toggleHighlightLinks = () => {
    setHighlightLinks((prev) => !prev);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.backgroundColor = highlightLinks ? "transparent" : "#d3d3ff"; // Light blue highlight
    });
  };

  // Toggle readable font
  const toggleReadableFont = () => {
    setReadableFont((prev) => !prev);
    document.body.style.fontFamily = readableFont ? "" : "Arial, sans-serif"; // Change font to Arial
  };

  // Adjust text alignment
  const adjustTextAlign = (alignment) => {
    setTextAlign(alignment);
    document.body.style.textAlign = alignment;
  };

  return (
    <div className="content-adjustments">
      <h2>Content Adjustments</h2>
      <div className="adjustment-grid">
        {/* Font Resizing */}
        <div className="adjustment-item">
          <span>Content Scaling</span>
          <div className="adjustment-controls">
            <button onClick={() => adjustZoom(-0.1)}>▼</button>
            <span>{Math.round(zoomLevel * 100)}%</span>
            <button onClick={() => adjustZoom(0.1)}>▲</button>
          </div>
        </div>

        {/* Readable Font */}
        <div className="adjustment-item">
          <span>Readable Font</span>
          <button onClick={toggleReadableFont}>
            {readableFont ? "Disable" : "Enable"}
          </button>
        </div>

        {/* Highlight Titles */}
        <div className="adjustment-item">
          <span>Highlight Titles</span>
          <button onClick={toggleHighlightTitles}>
            {highlightTitles ? "Disable" : "Enable"}
          </button>
        </div>

        {/* Highlight Links */}
        <div className="adjustment-item">
          <span>Highlight Links</span>
          <button onClick={toggleHighlightLinks}>
            {highlightLinks ? "Disable" : "Enable"}
          </button>
        </div>

        {/* Adjust Line Height */}
        <div className="adjustment-item">
          <span>Adjust Line Height</span>
          <div className="adjustment-controls">
            <button onClick={() => adjustLineHeight(-0.1)}>▼</button>
            <span>{lineHeight}</span>
            <button onClick={() => adjustLineHeight(0.1)}>▲</button>
          </div>
        </div>

        {/* Adjust Letter Spacing */}
        <div className="adjustment-item">
          <span>Adjust Letter Spacing</span>
          <div className="adjustment-controls">
            <button onClick={() => adjustLetterSpacing(-1)}>▼</button>
            <span>{letterSpacing}px</span>
            <button onClick={() => adjustLetterSpacing(1)}>▲</button>
          </div>
        </div>

        {/* Align Center */}
        <div className="adjustment-item">
          <span>Align Center</span>
          <button onClick={() => adjustTextAlign("center")}>Center</button>
        </div>

        {/* Align Left */}
        <div className="adjustment-item">
          <span>Align Left</span>
          <button onClick={() => adjustTextAlign("left")}>Left</button>
        </div>

        {/* Align Right */}
        <div className="adjustment-item">
          <span>Align Right</span>
          <button onClick={() => adjustTextAlign("right")}>Right</button>
        </div>
      </div>
    </div>
  );
};

export default ContentAdjustments;