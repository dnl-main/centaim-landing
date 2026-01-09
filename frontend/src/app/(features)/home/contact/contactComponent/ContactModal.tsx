"use client";

import React from "react";
import { CheckCircle } from "lucide-react"; // Lucide icon
import "./contactModal.css";

type ContactSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactSuccessModal: React.FC<ContactSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="contactModal-overlay" onClick={onClose}>
      <div
        className="contactModal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contactModal-icon-wrapper">
          <CheckCircle
            size={80}
            color="var(--primary-color)"
            className="contactModal-icon"
          />
        </div>

        <div className="contactModal-message">
          <p>
            Your message has been sent successfully.
            <br />
            We’ll get back to you shortly.
          </p>
        </div>

        <button
          className="contactModal-close-btn"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ContactSuccessModal;
