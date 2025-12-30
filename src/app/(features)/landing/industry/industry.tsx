import "./industry.css";
import "./industryMQ.css";
import AnalyticsCard from "./AnalyticsCard";
import ProgressCard from "./ProgressCard";


import { Gauge, Zap, SlidersHorizontal, Box } from "lucide-react";


const Industry = () => {
  return (
    <div className="industry">
      <div className="industry-box">
        <div className="industry-box-in">

          <div className="industry-heading">
            <p className="industry-heading-medium">For Growing Companies</p>
            <div className="industry-heading-header">
              <p className="industry-heading-header-semibold">A smarter way to manage, engage, and optimize</p>
              <p className="industry-heading-header-semibold">your operations efficiently built for modern business needs.</p>
            </div>        
          </div> {/* industry-heading */}

          <div className="industry-content">
            <div className="industry-content-left">
              <div className="industry-content-left-header">
                <p className="industry-content-left-header-medium">Smart workflow optimization</p>                
                <div className="industry-content-left-header-line">
                  {/* <p>line</p> */}
                </div> {/* industry-content-left-header-line */}
              </div> {/* industry-content-left-header */}

              <div className="industry-content-left-box">
                {/* <p>ui</p> */}
                <AnalyticsCard />
                {/* <ProgressCard /> */}
              </div> {/* industry-content-left-box */}
            </div> {/* industry-content-left */}
 
            <div className="industry-content-right">
              <div className="industry-content-right-header">
                <p className="industry-content-right-header-medium">Primary Technical Goals</p>                
                <div className="industry-content-right-header-line">
                  {/* <p>line</p> */}
                </div> {/* industry-content-right-header-line */}
              </div> {/* industry-content-right-header */}

              <div className="industry-content-right-cards">
                <div className="industry-content-right-cards-card">
                  <div className="industry-content-right-cards-card-icon">
                    {/* <p>icon</p> */}
                    <Gauge size={20} strokeWidth={1.5} aria-label="Inventory" />
                  </div> {/* industry-content-right-cards-card-icon */}
                  <p className="industry-content-right-cards-card-regular">Reduce alloted resources for tedious tasks</p>
                </div> {/* industry-content-right-cards-card */}

                <div className="industry-content-right-cards-card">
                  <div className="industry-content-right-cards-card-icon">
                    {/* <p>icon</p> */}
                    <Zap size={20} strokeWidth={1.5} aria-label="Inventory" />
                  </div> {/* industry-content-right-cards-card-icon */}
                  <p className="industry-content-right-cards-card-regular">Centralized organization of structured data</p>
                </div> {/* industry-content-right-cards-card */}

                <div className="industry-content-right-cards-card">
                  <div className="industry-content-right-cards-card-icon">
                    {/* <p>icon</p> */}
                    <SlidersHorizontal size={20} strokeWidth={1.5} aria-label="Inventory" />
                  </div> {/* industry-content-right-cards-card-icon */}
                  <p className="industry-content-right-cards-card-regular">Exclusive system for every business needs</p>
                </div> {/* industry-content-right-cards-card */}
              </div> {/* industry-content-right-cards */}
            </div> {/* industry-content-right */}
          </div> {/* industry-content */}
          
        </div> {/* industry-box-in */}
      </div> {/* industry-box */}
    </div>
  );
};

export default Industry;