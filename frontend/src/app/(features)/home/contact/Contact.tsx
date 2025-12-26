import "./contact.css";
import { Phone, Mail, User, Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <div className="homeContact" id="contact-section">
    <div className="homeContact-box">
    <div className="homeContact-box-in">
      <div className="homeContact-header">
        <p className="homeContact-header-title">Contact Us</p>
        <p className="homeContact-header-text">
          Feel free to contact us! Submit your queries here and we will listen
        </p>
      </div>

      <div className="homeContact-content">
        {/* LEFT CONTACT OPTIONS */}
        <div className="homeContact-content-left">
          {/* CALL US DIRECTLY */}
          <div className="homeContact-content-left-card homeContact-content-left-card--call">
            <div className="homeContact-content-left-card-iconBox">
              <Phone size={24} className="homeContact-content-left-card-icon" />
            </div>
            <p className="homeContact-content-left-card-label">Call Us Directly At</p>
            <p className="homeContact-content-left-card-value">470 - 601 - 1911</p>
            <button className="homeContact-content-left-card-button">Contact Us</button>
          </div>

          {/* CHAT WITH OUR TEAM */}
          <div className="homeContact-content-left-card homeContact-content-left-card--chat">
            <div className="homeContact-content-left-card-iconBox">
              <Mail size={24} className="homeContact-content-left-card-icon homeContact-content-left-card-icon--grey" />
            </div>
            <p className="homeContact-content-left-card-label">Chat With Our Team</p>
            <p className="homeContact-content-left-card-value homeContact-content-left-card-value--grey">email@pagedone.com</p>
            <button className="homeContact-content-left-card-button homeContact-content-left-card-button--grey">Contact Us</button>
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="homeContact-content-right">
          <form className="homeContact-form">
            {/* Name Input */}
            <div className="homeContact-form-group">
              <User size={20} className="homeContact-form-icon" />
              <input 
                type="text" 
                placeholder="Name" 
                className="homeContact-form-input homeContact-form-input--single"
              />
            </div>

            {/* Email and Phone Inputs */}
            <div className="homeContact-form-row">
              <div className="homeContact-form-group homeContact-form-group--half">
                <Mail size={20} className="homeContact-form-icon" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="homeContact-form-input"
                />
              </div>
              <div className="homeContact-form-group homeContact-form-group--half">
                <Smartphone size={20} className="homeContact-form-icon" />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="homeContact-form-input"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="homeContact-form-group homeContact-form-group--textarea">
              <textarea 
                placeholder="Message Here..." 
                className="homeContact-form-textarea"
                rows={6}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="homeContact-form-submitBtn">
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
    </div>      
    </div>
  );
};

export default Contact;