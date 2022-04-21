import React from "react";
import FormContact from "../public/form";

function ContactForm() {
  return (
    <section className="contact__form">
      <div className="container">
        <h4>Contact Form</h4>
        <div className="contenerform">
          <FormContact />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
