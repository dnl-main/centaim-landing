import "./CertificateTrackingMini.css";
import { IconUserCircle, IconBell} from "@tabler/icons-react";

const CertificateTrackingMini = () => {
    return (
        <>
            <div className="certificateFeature">
                <div className="certificate-container">
                    <div className="certificate-inner-container">
                        <div className="certificate-profile">
                            <div className="profile-picture">
                                <IconUserCircle
                                    size={40}
                                    strokeWidth={1.5}
                                    color="var(--primary-color)"  
                                    fill="var(--primary-color-opacity-15)" 
                                />
                            </div>
                            <div className="profile-info">
                                <div className="name">
                                    <p>Sarah C. Williams</p>
                                </div>
                                <div className="title">
                                    Java-National Cer...
                                </div>
                            </div>
                        </div>
                        <div className="certificate-expiration">
                            <p>Expires at:</p>
                        </div>
                        <div className="certificate-notify">
                            <div className="notify-button">
                                <p>Notify</p>
                                <IconBell
                                    size={20}
                                    color="var(--primary-color)"  
                                    fill="var(--primary-color-opacity-15)" 
                                />
                            </div>

                            <div className="notify-date">
                                <p>Dec-14-2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; export default CertificateTrackingMini;