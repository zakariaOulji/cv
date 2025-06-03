import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  // Si votre PDF s’appelle "Zakaria.pdf", placez-le dans le dossier public/
  // Pour rappel : public/Zakaria.pdf → accessible via "/Zakaria.pdf"

  return (
    <section className="hero">
      {home.map((val, i) => (
        <div className="heroContent" key={i}>
          <h3 className="fontSize" data-aos="fade-right">
            {val.text}
          </h3>
          <h1>
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p data-aos="fade-left">{val.desc}</p>

          {/* Lien sans les préfixes “+” du diff */}
          <button className='primaryBtn' data-aos='fade-up-right'>
            <a
              href="/Zakaria.pdf"
              download="zakaria-dev.pdf"
            >
              Download CV
            </a>
          </button>

        </div>
      ))}
    </section>
  );
};
