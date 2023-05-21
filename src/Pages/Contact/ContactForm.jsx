import ContactFormUIDesigns from "../../Components/ContactFormUIDesigns";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EmailSent = () => {
  return (
    <p className="form-message">
      Your message was successfully sent. I'll get back to you soon
    </p>
  );
};

export default function ContactForm() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zr5jrop",
        "template_x7x68xe",
        form.current,
        "apCtacvqXsx1LyUdj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setEmailSent(true);

    // hide success message after 5 sec
    setTimeout(() => setEmailSent(false), 5000);
  };

  return (
    <>
      <div className="form-wrapper">
        <ContactFormUIDesigns />
        <div className="form-container">
          <h1 className="form-hading">CONTACT ME</h1>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-box">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="text"
                name="email"
                placeholder="Email address"
                required
              />
              <input type="text" name="phone" placeholder="Phone" />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="message-box-container">
              <textarea
                className="message-box"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
              <br />
            </div>
            <input type="submit" className="submit-btn" value="Send Message" />
            <div className="email-status">
              {emailSent ? <EmailSent /> : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
