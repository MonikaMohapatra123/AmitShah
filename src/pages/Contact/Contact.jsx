import React from "react";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import data from "../../json/data.json";

const Contact = () => {
  const contactData = data["6"]; // page: contact

  return (
    <div>
      <ContactHeader />
      <ContactForm data={contactData} />
    </div>
  );
};

export default Contact;
