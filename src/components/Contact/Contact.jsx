import React from "react";
import { useContext, useRef, useState } from "react";
import "./Contact.css";
import Email from "../../images/email.png";
import Discord from "../../images/discord.png";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import Linkedin from "../../images/linkedin.png";

function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jxbodl3",
        "template_q54zitg",
        formRef.current,
        "user_mONG9LCNjdauLSi71paA4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact Me Let's Chat!</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Email} alt="" className="contact-icon" />
              jtruszinski@gmail.com
            </div>
            <div className="contact-info-item">
              <img src={Discord} alt="" className="contact-icon" />
              Joey#8392
            </div>
            <div className="contact-info-item">
              <img src={Linkedin} alt="" className="contact-icon" />
              Joey Truszinski
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <b>Have any Questions?</b> Lets chat! Always keeping my email and
            discord open to discuss programming needs or project questions!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#30353d" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#30353d" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#30353d" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#30353d" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && (
              <Alert variant="filled" severity="success">
                Email Sent! Thank you for your Message.
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
