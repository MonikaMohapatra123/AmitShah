import React from "react";
import "./ContactForm.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

const icons = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaInstagram: <FaInstagram />,
  FaYoutube: <FaYoutube />,
  FaWhatsapp: <FaWhatsapp />
};

const ContactForm = ({ data }) => {
  return (
    <div className="contact-section">
      {/* FORM */}
      <div className="contact-form">
        <h2>{data.form.title}</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder={data.form.fields[0].placeholder} />
            <input type="email" placeholder={data.form.fields[1].placeholder} />
          </div>
          <div className="form-row">
            <input type="text" placeholder={data.form.fields[2].placeholder} />
            <select>
              {data.form.fields[3].options.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
          </div>
          <textarea placeholder={data.form.fields[4].placeholder}></textarea>
          <button type="submit">{data.form.buttonText}</button>
        </form>
      </div>

      {/* INFO */}
      <div className="contact-info">
        <p>
          <FaMapMarkerAlt /> {data.info.address}
        </p>
        <p>
          <FaPhoneAlt /> {data.info.phone.join(", ")}
        </p>
        <p>
          <FaEnvelope /> {data.info.email}
        </p>
        <div className="social-icons">
          {data.socialLinks.map((social, i) => (
            <a key={i} href={social.link} target="_blank" rel="noreferrer">
              {icons[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
