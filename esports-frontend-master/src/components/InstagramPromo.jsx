import React from "react";
import Instagramwinner from "../assets/instagrambgimg.png";

const InstagramPromo = () => {
  return (
    <>
      <style>
        {`
          /* Your CSS is correct here, no changes needed */
          :root { /* ... */ }
          .instagram-promo-section { /* ... */ }
          /* ... all other styles */
        `}
      </style>
      <div className="background-image"></div>
      <section className="instagram-promo-section">
        {/* ... content ... */}
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule // CHANGED: nomodule to noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default InstagramPromo;