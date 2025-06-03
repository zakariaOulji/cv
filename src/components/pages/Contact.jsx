// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";
import emailjs from "emailjs-com";

export const Contact = () => {
  // 1. On crée un ref pour le <form> afin que emailjs.sendForm puisse le lire directement
  const formRef = useRef(null);

  // 2. État local pour afficher un message de réussite ou d’erreur
  const [status, setStatus] = useState(null);
  // status = null (aucun), "sending", "success", "error"

  // 3. Remplacez par vos propres IDs récupérés sur EmailJS
  const SERVICE_ID  = "service_m8i0lgn";
  const TEMPLATE_ID = "template_ae5cexi";
  const USER_ID     = "vLmyCfSjCJfiwzSOs";

  // 4. Handler de soumission
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // emailjs.sendForm récupère automatiquement tous les champs du formulaire
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        (result) => {
          console.log("Email envoyé :", result.text);
          setStatus("success");
          // Réinitialiser le formulaire visuellement
          formRef.current.reset();
        },
        (error) => {
          console.error("Erreur lors de l’envoi :", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div className="contact">
      <div className="container">
        <Heading title="Keep In Touch" />

        <div className="content flexsb">
          {/* ======== Partie droite : formulaire ======== */}
          <div className="right">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="flex">
                {/* Chaque champ doit avoir un attribut name correspondant au template */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  data-aos="flip-left"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  data-aos="flip-right"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                data-aos="flip-up"
                required
              />

              {/* Pour EmailJS, on nomme le textarea comme dans le template (ici "message") */}
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Votre message..."
                data-aos="flip-down"
                required
              ></textarea>

              <button type="submit" data-aos="zoom-in-up">
                {status === "sending" ? "Envoi…" : "Submit"}
              </button>
            </form>

            {/* 5. Affichage du retour utilisateur (succès/erreur) */}
            {status === "success" && (
              <div
                style={{
                  marginTop: "15px",
                  padding: "10px",
                  borderRadius: "3px",
                  backgroundColor: "#2d6a4f",
                  color: "#d8f3dc",
                  textAlign: "center",
                }}
              >
                Merci, votre message a bien été envoyé !
              </div>
            )}
            {status === "error" && (
              <div
                style={{
                  marginTop: "15px",
                  padding: "10px",
                  borderRadius: "3px",
                  backgroundColor: "#9f1d24",
                  color: "#fcebea",
                  textAlign: "center",
                }}
              >
                Une erreur est survenue. Veuillez réessayer plus tard.
              </div>
            )}
          </div>

          {/* ======== Partie gauche : info de contact (statique) ======== */}
          <div className="left">
            {contact.map((item, idx) => (
              <div className="box" key={idx} data-aos="zoom-in">
                <i>{item.icon}</i>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
