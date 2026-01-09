import "./benefits.css";
import "./benefitsMq.css"

import Image from "next/image";
import beneMain from "../../../../../public/_assets/photo/beneMain.png";

const Benefits = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Centaim Scheduling Service",
    "description": "Effortless team booking and automated reminders.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Benefits",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One-click Meeting Booking" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated Reminders" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quick Rescheduling" } }
      ]
    }
  };

  return (
    <section className="homeBenefits" id="benefits" aria-labelledby="benefits-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="homeBenefits-box">
        <div className="homeBenefits-box-in">
          <header className="homeBenefits-heading">
            {/* Semantic H2 for the section title */}
            <h2 id="benefits-title">Easily book a meeting with your team</h2>
          </header>

          <div className="homeBenefits-ui">
            <div className="homeBenefits-ui-cards">
              {/* Using <article> for individual benefit items */}
              <article className="homeBenefits-ui-cards-card">
                <h3 className="homeBenefits-ui-cards-card-medium">Book a meeting in just a few clicks</h3>
                <p className="homeBenefits-ui-cards-card-light">Easy to use tool that sets your meeting faster</p>
              </article>
              
              <article className="homeBenefits-ui-cards-card">
                <h3 className="homeBenefits-ui-cards-card-medium">Reschedule meetings quickly and easily</h3>
                <p className="homeBenefits-ui-cards-card-light">Reschedule in seconds without disrupting your workflow</p>
              </article>
              
              <article className="homeBenefits-ui-cards-card">
                <h3 className="homeBenefits-ui-cards-card-medium">Automatic reminder for scheduled meetings</h3>
                <p className="homeBenefits-ui-cards-card-light">Keep everyone on track with automated reminders</p>
              </article>
            </div>

            <div className="homeBenefits-ui-img">
              <Image
                src={beneMain}
                alt="Centaim team meeting booking interface dashboard"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Benefits;