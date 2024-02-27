// In page.tsx or a separate file
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
// Import your AboutComponent here
import AboutComponent from "./about/page"; // Adjust the import based on your actual component's location

const PageContent = () => {
  const [showAbout, setShowAbout] = useState(false);

  // The rest of your page content logic here
  // You can now use `showAbout` to conditionally render components

  return (
    <div>
      <Navbar
        showAbout={showAbout}
        toggleAbout={() => setShowAbout(!showAbout)}
      />
      {showAbout ? <AboutComponent /> : <div></div>}
    </div>
  );
};

export default PageContent;
