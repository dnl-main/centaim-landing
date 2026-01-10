import "./AvailableCrewMini.css";

import { IconUsers, IconArrowRight, IconCircle } from "@tabler/icons-react"

const AvailableCrewMini = () => {

    return (
        <>
        <div className="availableFeature">
            <div className="available-container">
                <div className="available-inner-container">
                    <div className="available-header">
                        <div className="left-header">
                            <header className="header-crew">Available Crew</header>
                            <IconUsers className="icon" size="20px" strokeWidth={2} color="var(--gray-color)"/>
                        </div>
                        <div className="right-header">
                            <IconArrowRight size="20px" strokeWidth={2} color="var(--gray-color)"/>
                        </div>
                    </div>
                    <div className="available-count">
                        <div className="count">
                            <h1>25</h1>
                        </div>
                        <div className="complete">
                            <p>21 Complete</p>
                        </div>
                    </div>
                    <div className="available-job-title">
                        <p>Job Title</p>
                    </div>
                    <div className="available-job-title-container">
                        <div className="job-container">
                            <IconCircle
                                strokeWidth={2} 
                                color="var(--primary-color-opacity-15)"  
                                fill="var(--primary-color-opacity-15)"    
                            />
                            <p>Trainee 4th Engineer (10)</p>
                        </div>


                        <div className="bottom-job-container">
                            <div className="job-container">
                                <IconCircle
                                    strokeWidth={2} 
                                    color="var(--primary-color-opacity-15)"  
                                    fill="var(--primary-color-opacity-15)"    
                                />
                                <p>Chief Engineer (3)</p>
                            </div>

                            <div className="job-container">
                                <IconCircle
                                    strokeWidth={2} 
                                    color="var(--primary-color-opacity-15)"  
                                    fill="var(--primary-color-opacity-15)"    
                            />
                                <p>More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );

}; export default AvailableCrewMini;