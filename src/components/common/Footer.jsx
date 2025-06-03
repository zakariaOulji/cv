import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <footer>
      {social.map((item, index) => (
        // 1) Utilisation de href={item.link} (sans guillemets)
        // 2) Ajout d’un key unique (ici index, mais vous pouvez utiliser un id si vous en avez un)
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i data-aos="zoom-in">{item.icon}</i>
        </a>
      ))}

      <p data-aos="zoom-in">All Rights Reserved 2018</p>
    </footer>
  );
};

export default Footer;
