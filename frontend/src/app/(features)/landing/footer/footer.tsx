'use client';

import './footer.css';
import './footerMq.css'
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const scrollToContact = () => {
    router.push('/home', { scroll: false });
    setTimeout(() => {
      window.scrollTo(0, 0);
      const target = document.getElementById('contact-section');
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = 0; 
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation: FrameRequestCallback = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          window.requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, targetPosition);
        }
      };

      window.requestAnimationFrame(animation);
    }, 100);
  };

  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-left">
          <div className="left-half-circle-arc">
            <div className="left-half-circle-arc-inner"></div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="middle-cta-hook">
            <p>Ready To</p>
            <p>Warm Things Up?</p>
          </div>
          <div className="middle-cta-catch">
            <p>Set up your business system with the precision to hit every goal. Upgrade your company productivity, contact us to discuss and consult your business needs</p>
            
          </div>

          <button onClick={scrollToContact} className="mid-cta-button">
            <p>Book Your Call</p>
          </button>
        </div>

        <div className="footer-right">
          <div className="right-half-circle-arc"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;