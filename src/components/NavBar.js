import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navlist = links.map((link, index) => {
    return <a key={index} href={`#${link}`}>{link}</a>;
  });

  return <nav>{navlist}</nav>;
}

export default NavBar;
