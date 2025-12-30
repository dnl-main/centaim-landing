import Image from "next/image";
import "./feature.css";
import "./featureMQ.css";

import topLeft2 from "../../../../../public/_assets/photo/topLeft2.webp";
import topRight2 from "../../../../../public/_assets/photo/topRight2.webp"; 
import botLeft2 from "../../../../../public/_assets/photo/botLeft2.webp";
import botRight2 from "../../../../../public/_assets/photo/botRight2.webp"; 



import { Circle, Calendar, Box, Users, CheckSquare } from "lucide-react";



const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-box">
        <div className="feature-box-heading">
          <p className="feature-box-heading-medium">Our Services</p>
          <p className="feature-box-heading-regular">Your targeted functions, all in one place. <br />
            Deliver an efficient system to your business effortlessly.</p>

        </div>
        
        <div className="feature-box-in">
          
          <section className="feature-top">
            <main className="feature-top-appointment"> 
              <article className="feature-top-appointment-text"> 
                <header className="feature-top-appointment-text-heading">
                  <div className="feature-top-appointment-text-heading-icon">
                    {/* <p>replace icon</p>             */}
                    {/* <Circle size={24} strokeWidth={2} /> */}
                    <Calendar size={20} strokeWidth={1.5} />
                  </div> {/* feature-top-appointment-text-heading-icon"*/} 
                  <p className="feature-top-appointment-text-icon-semibold">Appointment Scheduler</p>  
                </header> {/* feature-top-appointment-text-heading */}

                <p className="feature-top-appointment-text-regular">Effortlessly manage client bookings with a scheduling system that keeps your calendar organized and your operations running smoothly. </p>                         
              </article> {/* feature-top-appointment-text */} 

              <aside className="feature-top-appointment-display">  
                <Image
                    src={topLeft2}
                    alt=""
                    className=""
                />        
              </aside> {/* feature-top-appointment-display */}          
            </main> {/* feature-top-appointment */}

            <main className="feature-top-inventory"> 
              <article className="feature-top-inventory-text"> 
                <header className="feature-top-inventory-text-heading">
                  <div className="feature-top-inventory-text-heading-icon">
                    {/* <Circle size={24} strokeWidth={2} /> */}
                    <Box size={20} strokeWidth={1.5} aria-label="Inventory" />
                  </div> {/* feature-top-inventory-text-heading-icon"*/} 
                  <p className="feature-top-inventory-text-icon-semibold">Inventory Management</p>  
                </header> {/* feature-top-inventory-text-heading */}

                <p className="feature-top-inventory-text-regular">Track stock levels in real time with a smart inventory system that helps you maintain accuracy and avoid shortages.</p>                         
              </article> {/* feature-top-inventory-text */} 

              <aside className="feature-top-inventory-display">  
                {/* <p>ui</p>           */}
                <Image
                    src={topRight2}
                    alt=""
                    className=""
                />
              </aside> {/* feature-top-inventory-display */}          
            </main> {/* feature-top-inventory */}
          </section> {/* feature-top */}


          <section className="feature-bot">
            <main className="feature-bot-recruitment"> 
              <article className="feature-bot-recruitment-text"> 
                <header className="feature-bot-recruitment-text-heading">
                  <div className="feature-bot-recruitment-text-heading-icon">
                    {/* <p>replace icon</p>             */}
                    {/* <Circle size={24} strokeWidth={2} />  */}

                    <Users size={20} strokeWidth={1.5} aria-label="Recruitment" />
                    
                  </div> {/* feature-bot-recruitment-text-heading-icon"*/} 
                  <p className="feature-bot-recruitment-text-icon-semibold">Recruitment Portal</p>  
                </header> {/* feature-bot-recruitment-text-heading */}

                <p className="feature-bot-recruitment-text-regular">Streamline hiring with a recruitment system that centralizes applications, candidate profiles, and evaluation tools. </p>                         
              </article> {/* feature-bot-recruitment-text */} 

              <aside className="feature-bot-recruitment-display">  
                {/* <p>ui</p>           */}
                <Image
                    src={botLeft2}
                    alt=""
                    className=""
                />
              </aside> {/* feature-bot-recruitment-display */}          
            </main> {/* feature-bot-recruitment */}

            <main className="feature-bot-task"> 
              <article className="feature-bot-task-text"> 
                <header className="feature-bot-task-text-heading">
                  <div className="feature-bot-task-text-heading-icon">
                    {/* <p>replace icon</p>             */}
                    {/* <Circle size={24} strokeWidth={2} />  */}
                    <CheckSquare size={20} strokeWidth={1.5} aria-label="Task" />
                  </div> {/* feature-bot-task-text-heading-icon"*/} 
                  <p className="feature-bot-task-text-icon-semibold">Task Management</p>  
                </header> {/* feature-bot-task-text-heading */}

                <p className="feature-bot-task-text-regular">Organize workflows with a task system designed to simplify planning, assignment, and progress tracking. </p>                         
              </article> {/* feature-bot-task-text */} 

              <aside className="feature-bot-task-display">  
                {/* <p>ui</p>           */}
                <Image
                    src={botRight2}
                    alt=""
                    className=""
                />
              </aside> {/* feature-bot-task-display */}          
            </main> {/* feature-bot-task */}
          </section> {/* feature-bot */}
        </div> {/* feature-box-in */}
      </div> {/* feature-box */}
    </div>
  );
};

export default Feature;