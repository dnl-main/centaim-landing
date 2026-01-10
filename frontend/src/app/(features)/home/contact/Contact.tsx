"use client";

import "./contact.css";
import "./contactMq.css";
import ContactModal from "./contactComponent/ContactModal";

import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, User, Smartphone } from "lucide-react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mqeargpo");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const handleModalClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <section className="homeContact" id="contact-section" aria-labelledby="contact-title">

      <div className="homeContact-box">
        <div className="homeContact-box-in">
          <header className="homeContact-header">
            <h2 id="contact-title" className="homeContact-header-title">Contact Us</h2>
            <p className="homeContact-header-text">
              Feel free to contact us! Submit your queries here and we will listen
            </p>
          </header>

          <div className="homeContact-content">
            {/* LEFT CONTACT OPTIONS */}
            <address className="homeContact-content-left">
  {/* CALL CARD */}
  <div className="homeContact-content-left-card homeContact-content-left-card--call">
    <div className="homeContact-content-left-card-iconBox">
      <Phone size={24} className="homeContact-content-left-card-icon" />
    </div>
    <h3 className="homeContact-content-left-card-label">Call Us Directly At</h3>
    {/* The link itself */}
    <a href="tel:+639194937885" className="homeContact-content-left-card-value">
      +(63)919-493-7885
    </a>
    {/* Button triggers the dialer */}
    <button 
      className="homeContact-content-left-card-button"
      onClick={() => window.location.href = "tel:+639194937885"}
    >
      Call Now
    </button>
  </div>

  {/* EMAIL CARD */}
  <div className="homeContact-content-left-card homeContact-content-left-card--chat">
    <div className="homeContact-content-left-card-iconBox">
      <Mail size={24} className="homeContact-content-left-card-icon homeContact-content-left-card-icon--grey" />
    </div>
    <h3 className="homeContact-content-left-card-label">Chat With Our Team</h3>
    {/* The link itself */}
    <a href="mailto:contact@centaim.com" className="homeContact-content-left-card-value homeContact-content-left-card-value--grey">
      contact@centaim.com
    </a>
    {/* Button triggers the mail client */}
    <button 
      className="homeContact-content-left-card-button homeContact-content-left-card-button--grey"
      onClick={() => window.location.href = "mailto:contact@centaim.com?subject=Inquiry from Website"}
    >
      Email Us
    </button>
  </div>
</address>

            {/* RIGHT CONTACT FORM */}
            <div className="homeContact-content-right">
              <form className="homeContact-form" onSubmit={handleSubmit}>
                <div className="homeContact-form-group">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <User size={20} className="homeContact-form-icon" />
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    className="homeContact-form-input homeContact-form-input--single"
                    required
                  />
                </div>

                <div className="homeContact-form-row">
                  <div className="homeContact-form-group homeContact-form-group--half">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <Mail size={20} className="homeContact-form-icon" />
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      className="homeContact-form-input"
                      required
                    />
                  </div>
                  <div className="homeContact-form-group homeContact-form-group--half">
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <Smartphone size={20} className="homeContact-form-icon" />
                    <input 
                      id="phone"
                      type="number" 
                      name="phone"
                      placeholder="Phone Number" 
                      className="homeContact-form-input number"
                    />
                  </div>
                </div>

                <div className="homeContact-form-group homeContact-form-group--textarea">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea 
                    id="message"
                    placeholder="Message Here..." 
                    name="message"
                    className="homeContact-form-textarea"
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="homeContact-form-submitBtn" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={showModal} onClose={handleModalClose} />      
    </section>
  );
};

export default Contact;