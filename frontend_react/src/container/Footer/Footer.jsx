import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!username || !email || !message) return;

    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Get in contact with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.linkedin} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/ryan-porper/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text"
          >
            LinkedIn
          </a>
        </div>
        <div className="app__footer-card ">
          <img src={images.github} alt="github" />
          <a
            href="https://github.com/ryanporper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text"
          >
            GitHub
          </a>
        </div>
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ryan_porper@aol.com" className="p-text">
            ryan_porper@aol.com
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message..."
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for reaching out! I will contact you ASAP.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__gradientbg"
);
