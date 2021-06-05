import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Made by : Krishna Kumari</p>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
