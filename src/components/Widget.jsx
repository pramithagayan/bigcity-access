import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess, faTimes, faSyncAlt, faFileAlt, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Widget.css";
import ContentAdjustments from "./ContentAdjustments";

const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bigcity-widget">
      {/* Floating Button */}
      <button className="floating-button" onClick={toggleWidget} title={isOpen ? "Close Widget" : "Open Accessibility Widget"}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faUniversalAccess} />
      </button>

      {/* Popup with Framer Motion animation */}
      {isOpen && (
        <motion.div
          className="widget-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top Section */}
          <div className="widget-header">
            <h2>Big City Accessibility Adjustments</h2>
            <div className="widget-header-buttons">
              <button className="header-button" title="Reset Settings">
                <FontAwesomeIcon icon={faSyncAlt} /> Reset Settings
              </button>
              <button className="header-button" title="Accessibility Statement">
                <FontAwesomeIcon icon={faFileAlt} /> Statement
              </button>
              <button className="header-button" title="Hide Interface">
                <FontAwesomeIcon icon={faEyeSlash} /> Hide Interface
              </button>
            </div>
          </div>

          {/* Accessibility Options */}
          <div className="accessibility-options">
            <label>
              <input type="checkbox" /> Seizure Safe Profile
            </label>
            <label>
              <input type="checkbox" /> Vision Impaired Profile
            </label>
            <label>
              <input type="checkbox" /> ADHD Friendly Profile
            </label>
            <label>
              <input type="checkbox" /> Cognitive Disability Profile
            </label>
            <label>
              <input type="checkbox" /> Keyboard Navigation (Motor)
            </label>
            <label>
              <input type="checkbox" /> Blind Users (Screen Reader)
            </label>
          </div>

          {/* Content Adjustments Section */}
          <ContentAdjustments />

        </motion.div>
      )}
    </div>
  );
};

export default Widget;