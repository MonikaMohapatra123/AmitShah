import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import data from "../../json/data.json"; // adjust path if needed

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  TbBrandX: <TbBrandX />,
  FaInstagram: <FaInstagram />,
  FaYoutube: <FaYoutube />,
  FaWhatsapp: <FaWhatsapp />,
};

const Footer = () => {
  const footerData = data["2"]; // picking id: 2 from JSON

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>{footerData.newsletter.title}</h4>
          <div className="newsletter-input">
            <input type="email" placeholder={footerData.newsletter.placeholder} />
            <button>{footerData.newsletter.buttonText}</button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate & Follow */}
        <div className="footer-right">
          <h4>{footerData.donate.title}</h4>
          <div className="donate-buttons">
            {footerData.donate.buttons.map((btn, index) => (
              <a key={index} href={btn.link} target="_blank" rel="noreferrer">
                <button>{btn.name}</button>
              </a>
            ))}
          </div>

          <h4>{footerData.follow.title}</h4>
          <div className="social-icons">
            {footerData.follow.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footerData.bottomText}</p>
      </div>
    </footer>
  );
};

export default Footer;
