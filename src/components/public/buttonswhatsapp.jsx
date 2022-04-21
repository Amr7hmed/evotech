import React from "react";
import { WhatsappIcon } from "react-share";
import ReactWhatsapp from "react-whatsapp";

function ButtonsWhatsapp() {
  return (
    <section className="buttonswhatsapp">
      <ReactWhatsapp
        number="1-212-736-5000"
        message="Hello World!!!"
        className="btn"
      >
        <WhatsappIcon size={35} round={true} />
      </ReactWhatsapp>
    </section>
  );
}

export default ButtonsWhatsapp;
