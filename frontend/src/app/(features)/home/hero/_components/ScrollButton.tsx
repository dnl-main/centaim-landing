"use client";

export default function ScrollButton() {
  const scrollToContact = () => {
    const target = document.getElementById('contact-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Simplified smooth scroll
    }
  };

  return (
    <button 
      className="heroHome-box-left-main-buttons-contact"
      onClick={scrollToContact}
      aria-label="Scroll to contact section"
    >
      <p>Contact Us</p>
    </button>
  );
}